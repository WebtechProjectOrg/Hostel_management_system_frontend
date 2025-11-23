import React from "react";

const items = [
  { key: "dashboard", label: "Dashboard", icon: "home" },
  // profile removed from here
  { key: "complaints", label: "Complaints", icon: "clipboard" },
  { key: "staff", label: "Staff", icon: "users" },
  { key: "comments", label: "Comments", icon: "chat" },
  { key: "attachments", label: "Attachments", icon: "link" },
  { key: "categories", label: "Categories", icon: "tag" },
];

function Icon({ type }) {
  const common = "w-4 h-4";
  switch (type) {
    case "home":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11 2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "user":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      );
    case "users":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "chat":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      );
    case "link":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
      );
    case "tag":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
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
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <nav className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-thin py-2">
          {items.map((item) => {
            const active = currentSection === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onSectionChange(item.key)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md border transition whitespace-nowrap
                  ${
                    active
                      ? "bg-indigo-50 border-indigo-400 text-indigo-600"
                      : "bg-transparent border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-200"
                  }`}
              >
                <Icon type={item.icon} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
