export default function TractionPage(){
  return (
    <div className="section">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Traction & Moat</h1>
      <p className="text-gray-600 mb-8">Pilot highlights and why we win.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card card-p">
          <div className="text-2xl font-extrabold">1,200+</div>
          <div className="text-sm text-gray-600">Resumes analyzed (pilot)</div>
        </div>
        <div className="card card-p">
          <div className="text-2xl font-extrabold">73</div>
          <div className="text-sm text-gray-600">NPS</div>
        </div>
        <div className="card card-p">
          <div className="text-2xl font-extrabold">96%</div>
          <div className="text-sm text-gray-600">Satisfaction</div>
        </div>
      </div>

      <div className="card card-p mt-8">
        <h2 className="text-xl font-semibold">Moat</h2>
        <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
          <li>Reviewer graph: mentor-matching improves as data grows.</li>
          <li>Pinned inline feedback UX is faster than email or Google Docs.</li>
          <li>Supply-side quality: hand-vetted mentors with verified backgrounds.</li>
        </ul>
      </div>

      <div className="card card-p mt-8">
        <h2 className="text-xl font-semibold">Go-to-Market</h2>
        <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
          <li>University clubs & bootcamps (ambassador program).</li>
          <li>Content + SEO (resume examples, critiques, templates).</li>
          <li>Partner placements with job boards and newsletters.</li>
        </ul>
      </div>
    </div>
  )
}
