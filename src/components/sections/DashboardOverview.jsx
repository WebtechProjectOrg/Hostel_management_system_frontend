import React from "react";

export default function DashboardOverview({ dashboardHeading, complaints }) {
  const total = complaints.length;
  const pending = complaints.filter((c) => c.status === "Pending").length;
  const inProgress = complaints.filter((c) => c.status === "In Progress").length;
  const resolved = complaints.filter((c) => c.status === "Resolved").length;

  const stats = [
    {
      label: "Total Complaints",
      value: total,
      color: "text-indigo-600",
      border: "border-indigo-100",
      bg: "bg-indigo-50",
    },
    {
      label: "Pending",
      value: pending,
      color: "text-amber-500",
      border: "border-amber-100",
      bg: "bg-amber-50",
    },
    {
      label: "In Progress",
      value: inProgress,
      color: "text-sky-500",
      border: "border-sky-100",
      bg: "bg-sky-50",
    },
    {
      label: "Resolved",
      value: resolved,
      color: "text-emerald-500",
      border: "border-emerald-100",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="space-y-6">
      <header className="mb-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
          {dashboardHeading}
        </h1>
        <p className="text-sm text-slate-500">
          Overview of all maintenance complaints in BVB College Hostel.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl bg-white border ${item.border} shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5`}
          >
            <div className="p-4">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                {item.label}
              </p>
              <p className={`text-3xl font-extrabold ${item.color}`}>{item.value}</p>
            </div>
            <div className={`px-4 py-2 ${item.bg} rounded-b-2xl text-[11px] text-slate-600`}>
              {item.label === "Total Complaints" && "All recorded complaints."}
              {item.label === "Pending" && "Awaiting staff action."}
              {item.label === "In Progress" && "Currently being worked on."}
              {item.label === "Resolved" && "Completed and closed."}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
