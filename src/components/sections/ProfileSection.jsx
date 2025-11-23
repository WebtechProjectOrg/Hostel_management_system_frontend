import React from "react";

export default function ProfileSection({ currentUser, complaints }) {
  const userComplaints = complaints.filter(
    (c) => c.createdBy === currentUser.email
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Profile</h2>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <p className="text-slate-700 text-lg font-semibold mb-2">
          {currentUser.displayName}
        </p>
        <p className="text-slate-500">{currentUser.email}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Complaint Summary
        </h3>
        <p className="text-slate-600 text-sm">
          You have submitted <strong>{userComplaints.length}</strong> complaints.
        </p>
      </div>
    </div>
  );
}
