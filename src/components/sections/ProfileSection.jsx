import React from "react";

export default function ProfileSection({ currentUser, complaints }) {
  const myComplaints = complaints.filter(
    (c) => c.createdBy === currentUser.email
  );

  return (
    <div className="space-y-6">
      {/* profile header */}
      <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-semibold text-white shadow-sm">
            {currentUser.initials}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Logged in as
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
              {currentUser.displayName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentUser.email} •{" "}
              {currentUser.role === "admin"
                ? "Hostel Administration"
                : "Student"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-indigo-50 px-3 py-2">
            <p className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wide">
              Total
            </p>
            <p className="mt-1 text-lg font-semibold text-indigo-700">
              {myComplaints.length}
            </p>
          </div>
          <div className="rounded-xl bg-amber-50 px-3 py-2">
            <p className="text-[11px] font-semibold text-amber-600 uppercase tracking-wide">
              Pending
            </p>
            <p className="mt-1 text-lg font-semibold text-amber-700">
              {myComplaints.filter((c) => c.status === "Pending").length}
            </p>
          </div>
          <div className="rounded-xl bg-emerald-50 px-3 py-2">
            <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
              Resolved
            </p>
            <p className="mt-1 text-lg font-semibold text-emerald-700">
              {myComplaints.filter((c) => c.status === "Resolved").length}
            </p>
          </div>
        </div>
      </div>

      {/* my complaints timeline */}
      <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between gap-2 mb-4">
          <h2 className="text-sm font-semibold text-slate-900">
            My recent complaints
          </h2>
          <p className="text-[11px] text-slate-400">
            Sorted from latest to oldest.
          </p>
        </div>

        {myComplaints.length === 0 ? (
          <p className="text-sm text-slate-500">
            You haven’t raised any complaints yet. Use the{" "}
            <span className="font-semibold text-indigo-600">Complaints</span>{" "}
            section to submit an issue.
          </p>
        ) : (
          <ol className="relative border-l border-slate-200 pl-4 space-y-4">
            {myComplaints
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((c) => (
                <li key={c.id} className="relative pl-3">
                  <span className="absolute -left-[9px] top-1 h-3 w-3 rounded-full border-2 border-white bg-indigo-500 shadow-sm" />
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {c.title}
                      </p>
                      <span
                        className={
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold " +
                          (c.status === "Resolved"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            : c.status === "In Progress"
                            ? "bg-sky-50 text-sky-700 border border-sky-100"
                            : "bg-amber-50 text-amber-700 border border-amber-100")
                        }
                      >
                        {c.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{c.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                      <span>
                        {new Date(c.createdAt).toLocaleDateString()}{" "}
                        {new Date(c.createdAt).toLocaleTimeString()}
                      </span>
                      <span>• Category: {c.category}</span>
                      {c.assignedTo && (
                        <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 border border-slate-100">
                          Assigned to: {c.assignedTo}
                        </span>
                      )}
                    </div>
                    {c.feedback && (
                      <div className="mt-1 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-700">
                        <span className="font-semibold text-slate-800">
                          Your feedback:
                        </span>{" "}
                        {c.feedback}
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        )}
      </div>
    </div>
  );
}
