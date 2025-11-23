import React from "react";

export default function Navbar({
  portalTitle,
  userName,
  userInitials,
  onLogout,
  onProfileClick,
}) {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-500">
            BVB College Hostel
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
            {portalTitle}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[11px] uppercase tracking-wide text-slate-400">
              Logged in as
            </span>
            <span className="text-sm font-medium text-slate-800">
              {userName}
            </span>
          </div>

          {/* Avatar opens Profile */}
          <button
            type="button"
            onClick={onProfileClick}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white"
            title="View profile"
          >
            {userInitials}
          </button>

          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
