import React from "react";

export default function CategoriesSection({ complaints }) {
  const categories = {};
  complaints.forEach((c) => {
    categories[c.category] = (categories[c.category] || 0) + 1;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Categories</h2>

      <div className="space-y-4">
        {Object.keys(categories).map((cat) => (
          <div
            key={cat}
            className="bg-white p-5 rounded-xl shadow flex justify-between"
          >
            <span className="font-medium text-slate-700">{cat}</span>
            <span className="text-indigo-500 font-bold text-lg">
              {categories[cat]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
