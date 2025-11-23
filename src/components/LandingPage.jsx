import React from "react";
import kleLogo from "../assets/kle-logo.png"; // logo path

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
        {/* LEFT: University + Hostel text / CTA */}
        <div>
          {/* KLE logo + university name */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
              <img
                src={kleLogo}
                alt="KLE Technological University logo"
                className="h-10 md:h-12 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-indigo-200">
                KLE Technological University
              </p>
              <p className="text-[11px] text-indigo-100/80">
                Creating Value • Leveraging Knowledge
              </p>
            </div>
          </div>

          {/* Hostel / portal title */}
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-indigo-300 mb-1">
            BVB College Hostels
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            Hostel <span className="text-yellow-300">Maintenance Portal</span>
          </h1>
          <p className="text-sm md:text-base text-indigo-100/90 mb-6">
            A unified platform for students, wardens and maintenance staff to
            submit complaints, track progress and keep BVB College hostels
            running smoothly.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              type="button"
              onClick={onGetStarted}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-indigo-800 text-sm font-semibold shadow-md hover:shadow-lg hover:bg-indigo-50 transition"
            >
              Get Started – Login
            </button>
            <span className="text-[11px] text-indigo-100/90 max-w-xs">
              Use your <span className="font-semibold">kletech.ac.in</span> email
              to sign in as a student or hostel administrator.
            </span>
          </div>

          {/* Small feature bullets */}
          <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
            <div className="bg-white/10 rounded-lg p-3 border border-white/20">
              <p className="font-semibold">Quick complaints</p>
              <p className="text-indigo-100/80 text-[11px]">
                Raise hostel issues in under a minute.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 border border-white/20">
              <p className="font-semibold">Live tracking</p>
              <p className="text-indigo-100/80 text-[11px]">
                See pending, in-progress and resolved status.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 border border-white/20">
              <p className="font-semibold">Staff directory</p>
              <p className="text-indigo-100/80 text-[11px]">
                Contact managers and attenders quickly.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Professional dashboard preview card */}
        <div className="relative">
          <div className="absolute -inset-6 bg-black/30 rounded-3xl blur-xl" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 text-slate-900 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-500">
                  Hostel Operations
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Live maintenance overview
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Snapshot from BVB College hostel dashboard.
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200">
                Sample data
              </span>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Total complaints"
                value="18"
                tone="indigo"
                sub="Last 30 days"
              />
              <MetricCard
                label="Pending"
                value="4"
                tone="amber"
                sub="Awaiting action"
              />
              <MetricCard
                label="In progress"
                value="7"
                tone="sky"
                sub="Assigned to staff"
              />
              <MetricCard
                label="Resolved"
                value="7"
                tone="emerald"
                sub="Closed successfully"
              />
            </div>

            {/* SLA / response info */}
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-700">
                  Service quality (demo)
                </p>
                <p className="text-[11px] text-slate-500">
                  Avg. response time:{" "}
                  <span className="font-semibold text-slate-800">2.4 hours</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Resolved within 24 hours:{" "}
                  <span className="font-semibold text-emerald-600">82%</span>
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-50 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                  Healthy performance
                </span>
                <span className="text-[10px] text-slate-400">
                  Values shown are illustrative.
                </span>
              </div>
            </div>

            {/* Staff on duty row */}
            <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
              <div>
                <p className="text-xs font-semibold text-slate-700">
                  Managers on duty
                </p>
                <p className="text-[11px] text-slate-500">
                  Based on current hostel schedule.
                </p>
              </div>
              <div className="flex -space-x-2">
                {["BV", "VB", "TB"].map((initials) => (
                  <div
                    key={initials}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-semibold text-white border-2 border-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small helper component for the 4 metric tiles */
function MetricCard({ label, value, tone, sub }) {
  const colorClasses = {
    indigo: {
      value: "text-indigo-600",
      chip: "bg-indigo-50 text-indigo-700 border-indigo-100",
    },
    amber: {
      value: "text-amber-500",
      chip: "bg-amber-50 text-amber-700 border-amber-100",
    },
    sky: {
      value: "text-sky-500",
      chip: "bg-sky-50 text-sky-700 border-sky-100",
    },
    emerald: {
      value: "text-emerald-500",
      chip: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
  }[tone];

  return (
    <div className="rounded-xl border border-slate-100 bg-white/90 p-3 flex flex-col justify-between shadow-[0_4px_12px_rgba(15,23,42,0.03)]">
      <p className="text-[11px] font-medium text-slate-500 mb-1">{label}</p>
      <p className={`text-2xl font-extrabold ${colorClasses.value}`}>{value}</p>
      <span
        className={`mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] border ${colorClasses.chip}`}
      >
        {sub}
      </span>
    </div>
  );
}
