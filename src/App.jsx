import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import DashboardOverview from "./components/sections/DashboardOverview";
import ProfileSection from "./components/sections/ProfileSection";
import ComplaintsSection from "./components/sections/ComplaintsSection";
import StaffSection from "./components/sections/StaffSection";
import CommentsSection from "./components/sections/CommentsSection";
import AttachmentsSection from "./components/sections/AttachmentsSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import ComplaintModal from "./components/sections/ComplaintModal";

const PORTAL_TITLE = "Hostel Maintenance Portal";
const WELCOME_MESSAGE = "Welcome back! Please login to continue";
const DASHBOARD_HEADING = "Dashboard Overview";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [complaints, setComplaints] = useState([
    {
      id: "CMP001",
      title: "Water leakage in Room 304",
      description: "Water dripping from the ceiling during the night.",
      category: "Plumbing",
      priority: "High",
      status: "Pending",
      createdBy: "student01@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Vijay Balaraddi",
      comments: "Technician will check by tomorrow morning.",
    },
    {
      id: "CMP002",
      title: "Broken chair in study hall",
      description: "One of the chairs is unstable and risky to sit on.",
      category: "Carpentry",
      priority: "Low",
      status: "In Progress",
      createdBy: "student02@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Paramesh Balaraddi",
      comments: "Replacement requested from furniture store.",
    },
    {
      id: "CMP003",
      title: "Wi-Fi not working on 2nd floor",
      description: "Network drops frequently and speed is very low.",
      category: "Other",
      priority: "Medium",
      status: "Resolved",
      createdBy: "student03@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Vinayak Aivarapalli",
      comments: "Router was reset and configuration updated.",
    },
  ]);
  const [isComplaintModalOpen, setComplaintModalOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setCurrentSection("dashboard");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setComplaints([]);
    setCurrentSection("dashboard");
    setShowLanding(true);
  };

  const handleCreateComplaint = (data) => {
    if (!currentUser) return;
    if (complaints.length >= 999) {
      window.alert("Maximum limit of 999 complaints reached");
      return;
    }

    const newComplaint = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      category: data.category,
      priority: data.priority,
      status: "Pending",
      createdBy: currentUser.email,
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
    };

    setComplaints((prev) => [newComplaint, ...prev]);
    setComplaintModalOpen(false);
  };

  const handleDeleteComplaint = (id) => {
    setComplaints((prev) => prev.filter((c) => c.id !== id));
  };

  const handleUpdateComplaintStatus = (id, newStatus) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  // 1) LANDING PAGE (before login)
  if (!currentUser && showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  // 2) LOGIN PAGE
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5" />
        <LoginPage
          portalTitle={PORTAL_TITLE}
          welcomeMessage={WELCOME_MESSAGE}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    );
  }

  // 3) DASHBOARD AFTER LOGIN
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar
        portalTitle={PORTAL_TITLE}
        userName={currentUser.displayName}
        userInitials={currentUser.initials}
        onLogout={handleLogout}
      />

      <Sidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <main className="flex-1 px-3 sm:px-6 py-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {currentSection === "dashboard" && (
            <DashboardOverview
              dashboardHeading={DASHBOARD_HEADING}
              complaints={complaints}
            />
          )}

          {currentSection === "profile" && (
            <ProfileSection complaints={complaints} currentUser={currentUser} />
          )}

          {currentSection === "complaints" && (
            <ComplaintsSection
              complaints={complaints}
              currentUser={currentUser}
              onOpenModal={() => setComplaintModalOpen(true)}
              onDelete={handleDeleteComplaint}
              onUpdateStatus={handleUpdateComplaintStatus}
            />
          )}

          {currentSection === "staff" && <StaffSection />}

          {currentSection === "comments" && (
            <CommentsSection complaints={complaints} />
          )}

          {currentSection === "attachments" && <AttachmentsSection />}

          {currentSection === "categories" && (
            <CategoriesSection complaints={complaints} />
          )}
        </div>
      </main>

      <ComplaintModal
        open={isComplaintModalOpen}
        onClose={() => setComplaintModalOpen(false)}
        onSubmit={handleCreateComplaint}
      />
    </div>
  );
}
