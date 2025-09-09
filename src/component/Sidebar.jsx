import { useState } from "react";
import Logo from "../assets/inventory.png";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: null,
  },
  {
    label: "Inventory",
    children: [
      { label: "Items", href: "/inventory/items" },
      { label: "Supplier", href: "/inventory/supplier" },
    ],
  },
  {
    label: "Report",
    href: "#",
  },
  {
    label: "Setting", //Edit quick access,
    href: "#",
  },
];

function SidebarItem({ item }) {
  const location = useLocation();
  const isActive = item.href && location.pathname === item.href;
  const hasActiveChild =
    item.children &&
    item.children.some((child) => location.pathname === child.href);

  const [isOpen, setIsOpen] = useState(hasActiveChild);

  if (item.children) {
    return (
      <li>
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open={isOpen}
          onToggle={(e) => setIsOpen(e.target.open)}
        >
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-[var(--second-bg)]">
            <span className="text-base font-medium">{item.label}</span>
            <span
              className={`shrink-0 transition duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <ul className="mt-1 space-y-1 ml-4 pl-1 border-l-2 border-gray-200">
            {item.children.map((child, index) => {
              const isChildActive = location.pathname === child.href;
              return (
                <li
                  key={index}
                  className={`pl-3 rounded-lg text-black border-2
                  ${
                    isChildActive
                      ? "border-[var(--primary)] bg-white text-[var(--primary)] cursor-default"
                      : "border-transparent hover:bg-[var(--second-bg)]"
                  }`}
                >
                  <Link
                    to={child.href}
                    className="block rounded-lg py-2 text-base font-medium text-black"
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.href}
        className={`block rounded-lg px-4 py-2 text-base font-medium text-black border-2
  ${
    isActive
      ? "border-[var(--primary)] text-[var(--primary)] cursor-default"
      : "border-transparent hover:bg-[var(--second-bg)]"
  }`}
      >
        {item.label}
      </Link>
    </li>
  );
}

export default function Sidebar() {
  return (
    <section className="flex flex-col w-[13%] h-screen pt-5 bg-white border-r border-[var(--border-color)]">
      <div className="px-4 py-6 justify-center">
        <img src={Logo} className="h-21 object-contain mx-auto" />
        <ul className="mt-6 space-y-1">
          {menuItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
