import React from "react";

export default function StaffSection() {
  return (
    <div className="space-y-10">
      {/* Hostel Managers */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Nrupatunga Hostel Managers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { name: "BASAYYA VASTRAD", shift: "10 AM – 06 PM", phone: "7353112608" },
            { name: "VIJAY BALARADDI", shift: "12 AM – 08 PM", phone: "7829063032" },
            { name: "Totayya B", shift: "08 PM – 08 AM", phone: "7090013220" },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow border border-slate-200 space-y-2"
            >
              <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
              <p className="text-slate-600">Shift: {p.shift}</p>
              <p className="text-indigo-600 font-medium">📞 {p.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hostel Attenders */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Nrupatunga Hostel Attenders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { name: "Paramesh Balaraddi", shift: "08 AM – 04 PM", phone: "8431059051" },
            { name: "BASAVARAJ KARIGAR", shift: "12 AM – 08 PM", phone: "+91 73386 05877" },
            { name: "Vinayak Aivarapalli", shift: "10 AM – 06 PM", phone: "+91 96116 01988" },
            { name: "PARASHURAM KALYANI", shift: "08 PM – 08 AM", phone: "+91 89719 30985" },
            { name: "Venkatesh Lingaraddi", shift: "08 PM – 08 AM", phone: "8971002715" },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow border border-slate-200 space-y-2"
            >
              <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
              <p className="text-slate-600">Shift: {p.shift}</p>
              <p className="text-indigo-600 font-medium">📞 {p.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
