import { API_BASE } from "../lib/config";

export default function LandingPage() {
  return (
    <div className="relative">
      {/* soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-fuchsia-200/50 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 chip chip-blue mb-4">✨ New • Free session bookings</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-extrabold">
              Find a mentor. <span className="grad-text">Level up fast.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Upload your resume, get actionable feedback, and book a 1:1 with top mentors in product, design, and engineering.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a href="/mentors" className="btn btn-primary btn-lg w-full sm:w-auto">Browse Mentors</a>
              <a href="/upload" className="btn btn-outline btn-lg w-full sm:w-auto">Upload Resume</a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <KPI label="Match time" value="6 min" />
              <KPI label="NPS (pilot)" value="73" />
              <KPI label="Satisfaction" value="96%" />
            </div>
            <p className="mt-3 text-xs text-gray-500">Pilot metrics; full roll-out in progress.</p>
          </div>
          <div className="card card-p glass">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 grid place-content-center text-7xl">📄</div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>resume.pdf</span>
                <span className="chip chip-blue">Secure</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
              <span className="chip chip-green">No credit card required</span>
              <span>Start in under 2 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="section pt-0">
        <div className="card card-p">
          <p className="text-center text-gray-600 mb-6">Backed by mentors from</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-80">
            <img src="/logo1.svg" className="h-8" alt="Logo1"/>
            <img src="/logo2.svg" className="h-8" alt="Logo2"/>
            <img src="/logo3.svg" className="h-8" alt="Logo3"/>
            <img src="/logo4.svg" className="h-8" alt="Logo4"/>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pt-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Everything you need to grow</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon="📄" title="Resume upload" desc="Securely store your resume with signed URLs—PDF or DOCX." />
          <Feature icon="🧭" title="Mentor discovery" desc="Browse mentor profiles, skills, and experience. Filter by specialty." />
          <Feature icon="💬" title="Inline comments" desc="Mentors leave pinned notes by page and position for precision." />
          <Feature icon="📅" title="Free booking" desc="Book via Calendly/Cal.com embeds—no extra tools required." />
          <Feature icon="🔔" title="Notifications" desc="Email updates for requests and completed reviews." />
          <Feature icon="🔒" title="Privacy-first" desc="Your documents are private; share via unique links only." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section pt-0">
        <div className="grid lg:grid-cols-3 gap-6">
          <Testimonial quote="Got PM interviews after two iterations. The inline pins are 🔥." name="Priya, Associate PM"/>
          <Testimonial quote="Best feedback I’ve received on my resume. Concrete and fast." name="Marco, SWE"/>
          <Testimonial quote="Mentor quality is top-tier. Booked two free sessions." name="Ada, Product Designer"/>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0 text-center">
        <div className="inline-flex items-center gap-2 chip chip-purple mb-3">Ready when you are</div>
        <h3 className="text-2xl sm:text-3xl font-bold">Start free. Upgrade your career.</h3>
        <p className="mt-2 text-gray-600">No paywalls for booking sessions in MVP.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/upload" className="btn btn-primary btn-lg w-full sm:w-auto">Get Started</a>
          <a href="/mentors" className="btn btn-outline btn-lg w-full sm:w-auto">See Mentors</a>
        </div>
      </section>
    </div>
  );
}

function KPI({ label, value }) {
  return (
    <div className="card card-p text-center">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}
function Feature({ icon, title, desc }) {
  return (
    <div className="card card-p hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-700 grid place-content-center text-xl">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
    </div>
  );
}
function Testimonial({ quote, name }){
  return (
    <div className="card card-p">
      <p className="text-gray-800">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-600">— {name}</div>
    </div>
  )
}
