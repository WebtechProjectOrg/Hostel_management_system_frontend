import React from "react";

export default function CommentsSection({ complaints }) {
  // show complaints that have either feedback or old comments
  const data = complaints.filter((c) => c.feedback || c.comments);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Comments & Feedback
        </h1>
        <p className="text-sm text-slate-500">
          Student feedback and notes on complaints.
        </p>
      </div>

      {data.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 text-sm">
          No feedback has been submitted yet.
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl border border-slate-100 shadow-sm px-4 py-3"
            >
              <p className="text-sm font-semibold text-slate-900">
                {c.title}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                By {c.createdBy}
              </p>
              <div className="mt-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-sm text-slate-700">
                {c.feedback || c.comments}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
