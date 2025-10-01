export default function MentorCard({ avatar="/avatar.png", name, title, skills=[], kpi }) {
  return (
    <div className="card card-p hover:shadow-md transition group">
      <div className="flex items-center gap-4">
        <img src={avatar} alt="" className="h-16 w-16 rounded-xl object-cover ring-1 ring-black/5" />
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{title}</div>
          {kpi && <div className="text-xs text-emerald-700 mt-1">⭐ {kpi} 5-star reviews</div>}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.slice(0, 6).map((s) => (
          <span key={s} className="chip bg-gray-100 text-gray-700">{s}</span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <a href="/mentor/1" className="btn btn-outline btn-md">View Profile</a>
        <a href="/upload" className="btn btn-primary btn-md">Request Review</a>
      </div>
    </div>
  );
}
