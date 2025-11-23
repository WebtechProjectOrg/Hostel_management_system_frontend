import React, { useState } from "react";

export default function ComplaintsSection({
  complaints,
  currentUser,
  staffList,
  onOpenModal,
  onDelete,
  onUpdateStatus,
  onAssign,
  onUpdateFeedback,
}) {
  const isAdmin = currentUser?.role === "admin";
  const [feedbackDrafts, setFeedbackDrafts] = useState({});

  const availableStaff = staffList.filter((s) => s.present !== false);

  const handleFeedbackChange = (id, value) => {
    setFeedbackDrafts((prev) => ({ ...prev, [id]: value }));
  };

  const handleFeedbackSubmit = (id) => {
    const text = (feedbackDrafts[id] || "").trim();
    if (!text) return;
    onUpdateFeedback(id, text);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {currentUser.role === "admin" ? "Admin view" : "Student view"}
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
            Complaints
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {isAdmin
              ? "Review, assign and update all hostel maintenance complaints."
              : "Track the progress of the complaints you have submitted."}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-md hover:bg-indigo-500 active:bg-indigo-600 transition"
        >
          + New Complaint
        </button>
      </div>

      {complaints.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 text-sm">
          {isAdmin
            ? "No complaints have been submitted yet."
            : "You have not submitted any complaints yet. Click “New Complaint” to raise an issue."}
        </div>
      ) : (
        <div className="space-y-4">
          {complaints.map((c) => {
            const canGiveFeedback =
              !isAdmin &&
              c.createdBy === currentUser.email &&
              c.status === "Resolved";

            const feedbackValue = feedbackDrafts[c.id] || "";

            return (
              <article
                key={c.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {c.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      {c.description}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2">
                      {new Date(c.createdAt).toLocaleDateString()}{" "}
                      {new Date(c.createdAt).toLocaleTimeString()}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      By: <span className="font-medium">{c.createdBy}</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={
                        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold " +
                        (c.status === "Pending"
                          ? "bg-amber-50 text-amber-700"
                          : c.status === "In Progress"
                          ? "bg-sky-50 text-sky-700"
                          : "bg-emerald-50 text-emerald-700")
                      }
                    >
                      {c.status}
                    </span>
                    <span
                      className={
                        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold " +
                        (c.priority === "High"
                          ? "bg-rose-50 text-rose-700"
                          : c.priority === "Medium"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-indigo-50 text-indigo-700")
                      }
                    >
                      {c.priority} priority
                    </span>

                    {isAdmin && (
                      <div className="flex flex-col gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => onUpdateStatus(c.id, "In Progress")}
                          className="text-[11px] px-2 py-1 rounded-md border border-sky-200 text-sky-700 bg-sky-50 hover:bg-sky-100 transition"
                        >
                          Mark In Progress
                        </button>
                        <button
                          type="button"
                          onClick={() => onUpdateStatus(c.id, "Resolved")}
                          className="text-[11px] px-2 py-1 rounded-md border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition"
                        >
                          Mark Resolved
                        </button>
                        <button
                          type="button"
                          onClick={() => onDelete(c.id)}
                          className="text-[11px] px-2 py-1 rounded-md border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 transition"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-[11px] font-medium text-slate-600 border border-slate-200">
                    Category: {c.category || "General"}
                  </span>

                  {c.assignedTo ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-[11px] font-medium text-indigo-700 border border-indigo-100">
                      Assigned to: {c.assignedTo}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-[11px] font-medium text-slate-500 border border-slate-200">
                      Not yet assigned
                    </span>
                  )}
                </div>

                {/* attachments inside each complaint card */}
                {c.attachments && c.attachments.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-slate-500 mb-1">
                      Attachments
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {c.attachments.map((att) => (
                        <a
                          key={att.id}
                          href={att.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex flex-col items-start gap-1 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition p-2 w-32"
                        >
                          {att.type?.startsWith("image/") ? (
                            <img
                              src={att.url}
                              alt={att.name}
                              className="w-full h-20 rounded-md object-cover"
                            />
                          ) : (
                            <div className="w-full h-20 rounded-md bg-slate-200 flex items-center justify-center text-[10px] text-slate-600">
                              File
                            </div>
                          )}
                          <span className="text-[10px] text-slate-600 line-clamp-2">
                            {att.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* staff assignment (admin only) */}
                {isAdmin && (
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="text-slate-500 font-medium">
                      Assign to:
                    </span>
                    <select
                      value={c.assignedTo || ""}
                      onChange={(e) => onAssign(c.id, e.target.value)}
                      className="text-[11px] px-2 py-1 rounded-md border border-slate-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                    >
                      <option value="">— Unassigned —</option>
                      {availableStaff.map((s) => (
                        <option
                          key={s.id}
                          value={`${s.name} (${s.role})`}
                        >{`${s.name} (${s.role})`}</option>
                      ))}
                    </select>
                    <span className="text-slate-400">
                      Changes are visible to the student immediately.
                    </span>
                  </div>
                )}

                {/* existing feedback (visible to all) */}
                {c.feedback && (
                  <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2">
                    <p className="text-[11px] font-semibold text-emerald-800">
                      Student feedback
                    </p>
                    <p className="text-xs text-emerald-900 mt-1">
                      {c.feedback}
                    </p>
                  </div>
                )}

                {/* student can give feedback on resolved complaints */}
                {canGiveFeedback && !c.feedback && (
                  <div className="mt-3">
                    <p className="text-[11px] font-medium text-slate-600 mb-1">
                      Your feedback (optional, visible to admin)
                    </p>
                    <textarea
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      rows={2}
                      placeholder="Was the issue resolved properly?"
                      value={feedbackValue}
                      onChange={(e) =>
                        handleFeedbackChange(c.id, e.target.value)
                      }
                    />
                    <div className="flex justify-end mt-1">
                      <button
                        type="button"
                        onClick={() => handleFeedbackSubmit(c.id)}
                        className="px-3 py-1 rounded-md bg-indigo-600 text-[11px] font-semibold text-white hover:bg-indigo-500"
                      >
                        Submit feedback
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
