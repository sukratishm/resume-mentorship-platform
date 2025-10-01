export default function AboutPage(){
  return (
    <div className="section">
      <div className="card card-p">
        <h1 className="text-3xl font-extrabold">Why ResumeMentor</h1>
        <p className="text-gray-600 mt-3">
          ADPList-style mentorship focused on resumes and interview outcomes. We compress weeks of guessing into days of actionable feedback.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card card-p">
            <h2 className="text-lg font-semibold">Vision</h2>
            <p className="text-gray-600 mt-2">A global network of practitioners helping talent break into product, design, and engineering—at zero upfront cost.</p>
          </div>
          <div className="card card-p">
            <h2 className="text-lg font-semibold">MVP Scope</h2>
            <p className="text-gray-600 mt-2">Upload, share links, mentor claims, inline comments, free bookings. Payments later.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
