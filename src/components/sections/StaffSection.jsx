import React from "react";
import { FaUserTie, FaToolbox, FaClock } from "react-icons/fa";

export default function StaffSection() {
  const staff = [
    {
      name: "Basayya Vastrad",
      role: "Hostel Manager",
      hostel: "Nruptunga Hostel",
      shift: "10:00 am – 06:00 pm",
      contact: "7353112608",
    },
    {
      name: "Vijay Balaraddi",
      role: "Hostel Manager",
      hostel: "Nruptunga Hostel",
      shift: "12:00 am – 08:00 pm",
      contact: "7829063032",
    },
    {
      name: "Totayya B",
      role: "Hostel Manager",
      hostel: "Nruptunga Hostel",
      shift: "08:00 pm – 08:00 am",
      contact: "7090013220",
    },
  ];

  const attenders = [
    {
      name: "Paramesh Balaraddi",
      role: "Attender",
      hostel: "Nruptunga Hostel",
      shift: "08:00 am – 04:00 pm",
      contact: "8431059051",
    },
    {
      name: "BASAVARAJ KARIGAR",
      role: "Attender",
      hostel: "Nruptunga Hostel",
      shift: "12:00 am – 08:00 pm",
      contact: "7338605877",
    },
    {
      name: "Vinayak Aivarapalli",
      role: "Attender",
      hostel: "Nruptunga Hostel",
      shift: "10:00 am – 06:00 pm",
      contact: "9611601988",
    },
    {
      name: "PARASHURAM KALYANI",
      role: "Attender",
      hostel: "Nruptunga Hostel",
      shift: "08:00 pm – 08:00 am",
      contact: "8971930985",
    },
    {
      name: "Venkatesh Lingaraddi",
      role: "Attender",
      hostel: "Nruptunga Hostel",
      shift: "08:00 pm – 08:00 am",
      contact: "8971002715",
    },
  ];

  const Card = ({ person }) => (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-indigo-300">
      <div className="flex gap-4 items-center">
        <div
          className="h-14 w-14 rounded-full flex items-center justify-center
          bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow"
        >
          {person.name
            .split(" ")
            .map((x) => x[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-slate-800">{person.name}</h2>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            <FaUserTie className="text-indigo-500" />
            {person.role}
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-600 space-y-1">
        <p className="flex gap-2 items-center">
          <FaToolbox className="text-purple-500" /> {person.hostel}
        </p>
        <p className="flex gap-2 items-center">
          <FaClock className="text-orange-500" /> Shift: {person.shift}
        </p>
        <p>
          Contact:{" "}
          <span className="font-semibold text-slate-800">
            {person.contact}
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-800">Staff Directory</h1>
        <p className="text-slate-500">
          Managers and attenders responsible for hostel maintenance & student support.
        </p>
      </div>

      {/* Managers */}
      <section>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Hostel Managers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {staff.map((p) => (
            <Card key={p.name} person={p} />
          ))}
        </div>
      </section>

      {/* Attenders */}
      <section>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Attenders
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {attenders.map((p) => (
            <Card key={p.name} person={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
