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
// NOTE: AttachmentsSection is no longer used
import CategoriesSection from "./components/sections/CategoriesSection";
import ComplaintModal from "./components/sections/ComplaintModal";

const PORTAL_TITLE = "Hostel Maintenance Portal";
const WELCOME_MESSAGE = "Welcome back! Please login to continue";
const DASHBOARD_HEADING = "Dashboard Overview";

export default function App() {
  // Central staff list (later this will come from backend)
  const [staffList] = useState([
    // Technical staff – used in complaints
    {
      id: "S1",
      name: "Rajesh Mehta",
      role: "Electrician",
      hostel: "BVB College Hostel",
      shift: "09:00 am – 05:00 pm",
      phone: "9876543210",
      present: true,
    },
    {
      id: "S2",
      name: "Suresh Kumar",
      role: "Plumber",
      hostel: "BVB College Hostel",
      shift: "10:00 am – 06:00 pm",
      phone: "9876501234",
      present: true,
    },
    {
      id: "S3",
      name: "Amit Patel",
      role: "Carpenter",
      hostel: "BVB College Hostel",
      shift: "09:00 am – 05:00 pm",
      phone: "9876505678",
      present: true,
    },
    {
      id: "S4",
      name: "Vijay Singh",
      role: "Cleaner",
      hostel: "BVB College Hostel",
      shift: "06:00 am – 02:00 pm",
      phone: "9876512345",
      present: true,
    },
    {
      id: "S5",
      name: "Ramesh Yadav",
      role: "Maintenance",
      hostel: "BVB College Hostel",
      shift: "02:00 pm – 10:00 pm",
      phone: "9876523456",
      present: true,
    },

    // Nrupatunga hostel managers
    {
      id: "M1",
      name: "BASAYYA VASTRAD",
      role: "Hostel Manager",
      hostel: "Nrupatunga",
      shift: "10:00 am – 06:00 pm",
      phone: "7353112608",
      present: true,
    },
    {
      id: "M2",
      name: "VIJAY BALARADDI",
      role: "Hostel Manager",
      hostel: "Nrupatunga",
      shift: "12:00 am – 08:00 pm",
      phone: "7829063032",
      present: true,
    },
    {
      id: "M3",
      name: "Totayya B",
      role: "Hostel Manager",
      hostel: "Nrupatunga",
      shift: "08:00 pm – 08:00 am",
      phone: "7090013220",
      present: true,
    },

    // Nrupatunga hostel attenders
    {
      id: "A1",
      name: "Paramesh Balaraddi",
      role: "Attender",
      hostel: "Nrupatunga",
      shift: "08:00 am – 04:00 pm",
      phone: "8431059051",
      present: true,
    },
    {
      id: "A2",
      name: "BASAVARAJ KARIGAR",
      role: "Attender",
      hostel: "Nrupatunga",
      shift: "12:00 am – 08:00 pm",
      phone: "+91 73386 05877",
      present: true,
    },
    {
      id: "A3",
      name: "Vinayak Aivarapalli",
      role: "Attender",
      hostel: "Nrupatunga",
      shift: "10:00 am – 06:00 pm",
      phone: "+91 96116 01988",
      present: true,
    },
    {
      id: "A4",
      name: "PARASHURAM KALYANI",
      role: "Attender",
      hostel: "Nrupatunga",
      shift: "08:00 pm – 08:00 am",
      phone: "+91 89719 30985",
      present: true,
    },
    {
      id: "A5",
      name: "Venkatesh Lingaraddi",
      role: "Attender",
      hostel: "Nrupatunga",
      shift: "08:00 pm – 08:00 am",
      phone: "8971002715",
      present: true,
    },
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [currentSection, setCurrentSection] = useState("dashboard");

  // Seeded complaints – attachments: [] and feedback: "" added
  const [complaints, setComplaints] = useState([
    {
      id: "CMP001",
      title: "Water leakage in Room 304",
      description: "Severe leakage from the ceiling during the night.",
      category: "Plumbing",
      priority: "High",
      status: "Pending",
      createdBy: "student01@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP002",
      title: "Broken study table",
      description: "The study table leg is almost broken.",
      category: "Carpentry",
      priority: "Low",
      status: "In Progress",
      createdBy: "student02@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Suresh Kumar (Plumber)",
      comments: "Repair scheduled tomorrow",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP003",
      title: "Wi-Fi not working on 2nd floor",
      description: "Network drops frequently.",
      category: "Other",
      priority: "Medium",
      status: "Resolved",
      createdBy: "student03@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Vinayak Aivarapalli (Attender)",
      comments: "Router reset and replaced",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP004",
      title: "No hot water in bathroom",
      description: "Geyser is not heating water.",
      category: "Electrical",
      priority: "High",
      status: "Pending",
      createdBy: "student04@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP005",
      title: "Fan not working",
      description: "The fan runs only at full speed.",
      category: "Electrical",
      priority: "Medium",
      status: "In Progress",
      createdBy: "student05@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Rajesh Mehta (Electrician)",
      comments: "Capacitor replacement ordered",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP006",
      title: "Mosquito net damaged",
      description: "Tear in the net causing insects inside.",
      category: "Carpentry",
      priority: "Low",
      status: "Pending",
      createdBy: "student06@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP007",
      title: "Floor cleaning required",
      description: "Corridor floor is dirty and dusty.",
      category: "Cleaning",
      priority: "Medium",
      status: "Resolved",
      createdBy: "student07@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Vijay Singh (Cleaner)",
      comments: "Completed today morning",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP008",
      title: "Broken lock",
      description: "Room lock jammed from inside.",
      category: "Carpentry",
      priority: "High",
      status: "Pending",
      createdBy: "student08@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP009",
      title: "Power socket damaged",
      description: "Sparks seen while plugging laptop charger.",
      category: "Electrical",
      priority: "High",
      status: "In Progress",
      createdBy: "student09@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Rajesh Mehta (Electrician)",
      comments: "Inspection done, repair tomorrow",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP010",
      title: "Dustbin missing",
      description: "Floor bin not available.",
      category: "Cleaning",
      priority: "Low",
      status: "Resolved",
      createdBy: "student10@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Ramesh Yadav (Maintenance)",
      comments: "New bin placed today",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP011",
      title: "Dormitory window hinge broken",
      description: "Window not closing properly.",
      category: "Carpentry",
      priority: "Medium",
      status: "Pending",
      createdBy: "student11@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP012",
      title: "Blanket replacement needed",
      description: "Torn and unusable.",
      category: "Other",
      priority: "Low",
      status: "Pending",
      createdBy: "student12@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP013",
      title: "Tap leaking",
      description: "Water dripping continuously.",
      category: "Plumbing",
      priority: "Medium",
      status: "In Progress",
      createdBy: "student13@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Suresh Kumar (Plumber)",
      comments: "Leakage identified",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP014",
      title: "Light flickering",
      description: "Tube light keeps blinking.",
      category: "Electrical",
      priority: "Low",
      status: "Resolved",
      createdBy: "student14@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Rajesh Mehta (Electrician)",
      comments: "Tube replaced",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP015",
      title: "Dirty water in bathroom",
      description: "Water appears muddy in morning.",
      category: "Plumbing",
      priority: "High",
      status: "Pending",
      createdBy: "student15@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP016",
      title: "Mattress replacement",
      description: "Old and uncomfortable.",
      category: "Other",
      priority: "Low",
      status: "Pending",
      createdBy: "student16@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP017",
      title: "Main door noisy",
      description: "Makes loud sound while closing.",
      category: "Carpentry",
      priority: "Medium",
      status: "In Progress",
      createdBy: "student17@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Amit Patel (Carpenter)",
      comments: "Oil lubrication pending",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP018",
      title: "Pest control required",
      description: "Too many insects in dorm.",
      category: "Cleaning",
      priority: "High",
      status: "Pending",
      createdBy: "student18@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP019",
      title: "Clothes drying stand broken",
      description: "One leg bent.",
      category: "Carpentry",
      priority: "Low",
      status: "Resolved",
      createdBy: "student19@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "Amit Patel (Carpenter)",
      comments: "Welded successfully",
      attachments: [],
      feedback: "",
    },
    {
      id: "CMP020",
      title: "Water filter needs cleaning",
      description: "Taste of drinking water changed.",
      category: "Plumbing",
      priority: "Medium",
      status: "Pending",
      createdBy: "student20@kletech.ac.in",
      createdAt: new Date().toISOString(),
      assignedTo: "",
      comments: "",
      attachments: [],
      feedback: "",
    },
  ]);

  const [isComplaintModalOpen, setComplaintModalOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleLoginSuccess = (user) => {
    // user.role should be "student" or "admin"
    setCurrentUser(user);
    setCurrentSection("dashboard");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentSection("dashboard");
    setShowLanding(true);
    // keeping complaints as-is so dummy data stays after logout
  };

  const handleCreateComplaint = (data) => {
    if (!currentUser) return;
    if (complaints.length >= 999) {
      window.alert("Maximum limit of 999 complaints reached");
      return;
    }

    const attachments =
      data.attachmentsFiles?.map((file, index) => ({
        id: `${Date.now()}-${index}`,
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
      })) || [];

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
      attachments,
      feedback: "",
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

  const handleAssignComplaint = (id, staffLabel) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              assignedTo: staffLabel || "",
            }
          : c
      )
    );
  };

  const handleUpdateFeedback = (id, feedbackText) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, feedback: feedbackText } : c
      )
    );
  };

  const isAdmin = currentUser?.role === "admin";

  // Admin sees all; students see only their own
  const visibleComplaints = isAdmin
    ? complaints
    : complaints.filter((c) => c.createdBy === currentUser?.email);

  // 1) Landing page
  if (!currentUser && showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  // 2) Login page
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

  // 3) Dashboard after login
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar
        portalTitle={PORTAL_TITLE}
        userName={currentUser.displayName}
        userInitials={currentUser.initials}
        onLogout={handleLogout}
        onProfileClick={() => setCurrentSection("profile")}
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
              complaints={visibleComplaints}
            />
          )}

          {currentSection === "profile" && (
            <ProfileSection
              complaints={visibleComplaints}
              currentUser={currentUser}
            />
          )}

          {currentSection === "complaints" && (
            <ComplaintsSection
              complaints={visibleComplaints}
              currentUser={currentUser}
              staffList={staffList}
              onOpenModal={() => setComplaintModalOpen(true)}
              onDelete={handleDeleteComplaint}
              onUpdateStatus={handleUpdateComplaintStatus}
              onAssign={handleAssignComplaint}
              onUpdateFeedback={handleUpdateFeedback}
            />
          )}

          {currentSection === "staff" && <StaffSection staff={staffList} />}

          {currentSection === "comments" && (
            <CommentsSection complaints={visibleComplaints} />
          )}

          {/* Attachments tab removed */}

          {currentSection === "categories" && (
            <CategoriesSection complaints={visibleComplaints} />
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
