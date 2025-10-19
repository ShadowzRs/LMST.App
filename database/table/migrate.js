import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "inventory.db");
const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    applied_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

export function runMigrations() {
  const migrationsDir = path.join(__dirname, "../migrations");
  if (!fs.existsSync(migrationsDir)) return;

  const appliedMigrations = db
    .prepare("SELECT name FROM migrations")
    .all()
    .map((m) => m.name);

  const migrationFiles = fs.readdirSync(migrationsDir).sort();

  for (const file of migrationFiles) {
    if (!appliedMigrations.includes(file)) {
      console.log(`Running migration: ${file}`);
      const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
      db.exec(sql);
      db.prepare("INSERT INTO migrations (name) VALUES (?)").run(file);
    }
  }

  console.log("All migrations applied");
}

export { db };
