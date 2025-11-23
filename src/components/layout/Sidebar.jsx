import React from "react";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "home" },
  { key: "complaints", label: "Complaints", icon: "clipboard" },
  { key: "staff", label: "Staff", icon: "users" },
  { key: "comments", label: "Comments", icon: "chat" },
  { key: "categories", label: "Categories", icon: "tag" },
];

function Icon({ name, className }) {
  const base = "w-4 h-4 " + (className || "");
  switch (name) {
    case "home":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      );
    case "users":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M13 7a4 4 0 11-8 0 4 4 0 018 0zm7 13v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          />
        </svg>
      );
    case "chat":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M8 10h8M8 14h4m1 7l-4-4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4h-1l-3 4z"
          />
        </svg>
      );
    case "tag":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M7 7h.01M7 3h5l7 7-7 7H7L3 13V8a5 5 0 014-5z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar({ currentSection, onSectionChange }) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <nav className="flex items-center gap-2 overflow-x-auto py-2">
          {NAV_ITEMS.map((item) => {
            const active = currentSection === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onSectionChange(item.key)}
                className={
                  "inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition " +
                  (active
                    ? "bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 border border-transparent")
                }
              >
                <Icon
                  name={item.icon}
                  className={active ? "text-indigo-600" : "text-slate-500"}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
