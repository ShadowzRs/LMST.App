const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

// DB will live inside database/table/inventory.db
const db = new Database(path.join(__dirname, "inventory.db"));

// Improve performance and safety
db.pragma("journal_mode = WAL");

// Create migrations table if not exists
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    applied_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

function runMigrations() {
  // migrations folder is sibling to "table"
  const migrationsDir = path.join(__dirname, "../migrations");
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

module.exports = { db, runMigrations };
