import React, { useState } from "react";

const studentPattern =
  /^[0-9]{2}fe(1[1-9]|2[0-5])(bcs|bec|bbt|bcv|bcc|bmec|bci|bca|bba|mca|mba)(00[1-9]|0[1-9][0-9]|[1-4][0-9]{2}|500)@kletech\.ac\.in$/;

const adminPattern = /^[a-z]+@kletech\.ac\.in$/;

export default function LoginPage({
  portalTitle,
  welcomeMessage,
  onLoginSuccess,
}) {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value, currentRole) => {
    const v = value.toLowerCase();
    const isStudentValid = studentPattern.test(v);
    const isAdminValid = adminPattern.test(v);

    if (!v) {
      setEmailError("");
      return true;
    }

    if (currentRole === "student" && !isStudentValid) {
      setEmailError(
        "Invalid format. Use: 01fe23bcs074@kletech.ac.in (years: 11-25 | ID: 001-500)"
      );
      return false;
    }

    if (currentRole === "admin" && !isAdminValid) {
      setEmailError("Invalid format. Use: yourname@kletech.ac.in");
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    validateEmail(email, newRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isStudentValid = studentPattern.test(email.toLowerCase());
    const isAdminValid = adminPattern.test(email.toLowerCase());

    if (role === "student" && !isStudentValid) {
      setEmailError("Invalid student email format. Use: 01fe23bcs074@kletech.ac.in");
      return;
    }
    if (role === "admin" && !isAdminValid) {
      setEmailError("Invalid admin email format. Use: yourname@kletech.ac.in");
      return;
    }
    if (!password) return;

    let branch = "";
    let studentId = "";
    let displayName = "";
    let initials = "";

    if (role === "student") {
      const emailPart = email.toLowerCase().split("@")[0];
      const match = emailPart.match(
        /^[0-9]{2}fe(1[1-9]|2[0-5])(bcs|bec|bbt|bcv|bcc|bmec|bci|bca|bba|mca|mba)(00[1-9]|0[1-9][0-9]|[1-4][0-9]{2}|500)$/
      );
      if (match) {
        branch = match[2].toUpperCase();
        studentId = match[3];
        displayName = `${branch} Student ${studentId}`;
        initials = branch.substring(0, 2);
      }
    } else {
      const namePart = email.toLowerCase().split("@")[0];
      displayName =
        namePart.charAt(0).toUpperCase() +
        namePart.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");
      initials = namePart.substring(0, 2).toUpperCase();
    }

    const user = {
      email: email.toLowerCase(),
      branch,
      id: studentId,
      role,
      displayName,
      initials,
    };

    onLoginSuccess(user);
  };

  return (
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{portalTitle}</h1>
        <p className="text-sm text-slate-500">{welcomeMessage}</p>
      </div>

      <div className="flex gap-2 bg-slate-100 p-1 rounded-lg mb-8">
        <button
          type="button"
          onClick={() => handleRoleChange("student")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
            role === "student"
              ? "bg-white text-indigo-500 shadow"
              : "text-slate-600 hover:text-indigo-500"
          }`}
        >
          Student Login
        </button>
        <button
          type="button"
          onClick={() => handleRoleChange("admin")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
            role === "admin"
              ? "bg-white text-indigo-500 shadow"
              : "text-slate-600 hover:text-indigo-500"
          }`}
        >
          Admin Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            College Email ID
          </label>
          <input
            type="email"
            value={email}
            className={`w-full rounded-lg border-2 px-4 py-2.5 text-sm outline-none transition ${
              emailError ? "border-red-500" : "border-slate-200 focus:border-indigo-500"
            }`}
            placeholder="e.g., 01fe23bcs074@kletech.ac.in"
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value, role);
            }}
            required
          />
          {emailError && (
            <p className="mt-1 text-xs text-red-600">
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 transition"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-3 shadow-md hover:shadow-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
