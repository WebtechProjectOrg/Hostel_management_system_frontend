import React from "react";

const metricConfig = [
  {
    key: "total",
    label: "Total Complaints",
    description: "All recorded issues in the hostel.",
    color: "indigo",
  },
  {
    key: "pending",
    label: "Pending",
    description: "Awaiting staff action.",
    color: "amber",
  },
  {
    key: "inProgress",
    label: "In Progress",
    description: "Currently being handled.",
    color: "sky",
  },
  {
    key: "resolved",
    label: "Resolved",
    description: "Closed after completion.",
    color: "emerald",
  },
];

export default function DashboardOverview({ dashboardHeading, complaints }) {
  const total = complaints.length;
  const pending = complaints.filter((c) => c.status === "Pending").length;
  const inProgress = complaints.filter((c) => c.status === "In Progress").length;
  const resolved = complaints.filter((c) => c.status === "Resolved").length;

  const stats = {
    total,
    pending,
    inProgress,
    resolved,
  };

  const colorMap = {
    indigo: {
      chip: "bg-indigo-50 text-indigo-700 border-indigo-100",
      number: "text-indigo-600",
      bar: "bg-indigo-100",
    },
    amber: {
      chip: "bg-amber-50 text-amber-700 border-amber-100",
      number: "text-amber-500",
      bar: "bg-amber-100",
    },
    sky: {
      chip: "bg-sky-50 text-sky-700 border-sky-100",
      number: "text-sky-500",
      bar: "bg-sky-100",
    },
    emerald: {
      chip: "bg-emerald-50 text-emerald-700 border-emerald-100",
      number: "text-emerald-500",
      bar: "bg-emerald-100",
    },
  };

  return (
    <div className="space-y-6">
      {/* header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
            BVB College Hostel
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
            {dashboardHeading}
          </h1>
          <p className="mt-1 text-sm text-slate-500 max-w-xl">
            High-level snapshot of maintenance activity — useful for warden,
            managers and hostel administrators.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          Live demo data
        </div>
      </div>

      {/* metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {metricConfig.map((m) => {
          const value = stats[m.key];
          const color = colorMap[m.color];

          const ratio =
            stats.total > 0 && m.key !== "total"
              ? Math.min(100, Math.round((value / stats.total) * 100))
              : 100;

          return (
            <div
              key={m.key}
              className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-100 via-slate-50 to-white" />
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.16em]">
                    {m.label}
                  </h2>
                  <span
                    className={
                      "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium " +
                      color.chip
                    }
                  >
                    {m.key === "total" ? "All" : "This portal"}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <p
                    className={
                      "text-3xl font-semibold leading-none " + color.number
                    }
                  >
                    {value}
                  </p>
                  {m.key !== "total" && stats.total > 0 && (
                    <p className="text-xs text-slate-400">
                      of {stats.total} ({ratio}%)
                    </p>
                  )}
                </div>

                <p className="text-xs text-slate-500">{m.description}</p>

                {m.key !== "total" && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={"h-full rounded-full " + color.bar}
                        style={{ width: `${ratio}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {ratio}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
