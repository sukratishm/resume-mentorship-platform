export default function MenteeDashboard() {
  return (
    <div className="section">
      <h2 className="text-3xl font-extrabold mb-6">Your Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card card-p">
          <h3 className="font-semibold">Resumes</h3>
          <p className="text-sm text-gray-600 mt-1">Uploaded files and review status will appear here.</p>
          <div className="mt-4">
            <a href="/upload" className="btn btn-primary btn-md">Upload Resume</a>
          </div>
        </div>
        <div className="card card-p">
          <h3 className="font-semibold">Sessions</h3>
          <p className="text-sm text-gray-600 mt-1">Upcoming and past sessions.</p>
          <div className="mt-4">
            <a href="/mentors" className="btn btn-outline btn-md">Find a Mentor</a>
          </div>
        </div>
        <div className="card card-p">
          <h3 className="font-semibold">Notifications</h3>
          <p className="text-sm text-gray-600 mt-1">You’ll get an email when a review is completed.</p>
        </div>
      </div>
    </div>
  );
}
