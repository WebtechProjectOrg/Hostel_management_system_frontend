import React from "react";

export default function ComplaintsSection({
  complaints,
  currentUser,
  onOpenModal,
  onDelete,
  onUpdateStatus,
}) {
  const isAdmin = currentUser.role === "admin";

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Complaints</h2>
        {currentUser.role === "student" && (
          <button
            onClick={onOpenModal}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow"
          >
            + New Complaint
          </button>
        )}
      </div>

      <div className="space-y-4">
        {complaints.map((c) => (
          <div
            key={c.id}
            className="bg-white p-5 rounded-xl shadow border border-slate-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{c.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{c.description}</p>
                <p className="text-xs text-slate-400 mt-2">
                  {new Date(c.createdAt).toLocaleString()}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  c.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : c.status === "In Progress"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {c.status}
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-slate-500">By: {c.createdBy}</p>

              <div className="flex gap-3">
                {isAdmin && (
                  <>
                    <select
                      value={c.status}
                      onChange={(e) => onUpdateStatus(c.id, e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>
                  </>
                )}

                {(isAdmin || currentUser.email === c.createdBy) && (
                  <button
                    onClick={() => onDelete(c.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
