import React from "react";

export default function CommentsSection({ complaints }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Comments</h2>
      <p className="text-slate-600 mb-4">
        Comments visible from complaints:
      </p>

      <div className="space-y-4">
        {complaints
          .filter((c) => c.comments)
          .map((c) => (
            <div
              key={c.id}
              className="bg-white p-5 rounded-xl shadow border border-slate-100"
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {c.title}
              </h3>
              <p className="text-slate-500 mt-1">{c.comments}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
