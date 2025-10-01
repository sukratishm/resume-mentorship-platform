import MentorCard from "../components/MentorCard";
import { API_BASE } from "../lib/config";
import { useEffect, useState } from "react";

export default function MentorDirectory() {
  const [mentors, setMentors] = useState([]);
  useEffect(()=>{
    fetch(`${API_BASE}/mentors`).then(r=>r.json()).then(setMentors).catch(()=> {
      // fallback demo data
      setMentors([
        { id: 1, name: "Aisha Khan", title: "Senior PM @ FinTech", skills: ["Strategy","Roadmapping","PM Interviews"], avatar:"/avatar.png", kpi: 128 },
        { id: 2, name: "Diego Santos", title: "Staff Engineer @ Cloud", skills: ["System Design","Resume Review","Backend"], avatar:"/avatar.png", kpi: 97 },
        { id: 3, name: "Mei Lin", title: "Design Lead @ Health", skills: ["Portfolio","UX Writing","Critique"], avatar:"/avatar.png", kpi: 143 },
      ]);
    });
  },[]);
  return (
    <div className="section">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Mentors</h1>
          <p className="text-gray-600 mt-1">Handpicked experts in product, design, and engineering.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="btn btn-outline btn-md">All</button>
          <button className="btn btn-ghost btn-md">Product</button>
          <button className="btn btn-ghost btn-md">Design</button>
          <button className="btn btn-ghost btn-md">Engineering</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map(m => (
          <MentorCard key={m.id} name={m.name} title={m.title} skills={m.skills} kpi={m.kpi} avatar={m.avatar} />
        ))}
      </div>
    </div>
  );
}
