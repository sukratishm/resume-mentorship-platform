import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${isActive? "bg-indigo-600 text-white":"text-gray-700 hover:bg-gray-900/5"}`
  }>{children}</NavLink>
);

export default function Layout({ children }){
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="container-pro h-16 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 grid place-content-center text-white font-bold">RM</div>
            <span className="text-lg font-bold">Resume<span className="grad-text">Mentor</span></span>
          </Link>
          <nav className="ml-auto hidden md:flex items-center gap-1">
            <NavItem to="/mentors">Mentors</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/upload">Upload</NavItem>
            <NavItem to="/traction">Traction</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/login">Login</NavItem>
            <Link to="/upload" className="btn btn-primary btn-md ml-2">Get Started</Link>
          </nav>
          <button className="md:hidden ml-auto btn btn-ghost btn-md" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation">☰</button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="container-pro py-3 flex flex-col gap-2">
              <NavItem to="/mentors">Mentors</NavItem>
              <NavItem to="/dashboard">Dashboard</NavItem>
              <NavItem to="/upload">Upload</NavItem>
              <NavItem to="/traction">Traction</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/login">Login</NavItem>
              <Link to="/upload" className="btn btn-primary btn-md w-full mt-1">Get Started</Link>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1"><div className="container-pro">{children}</div></main>
      <footer className="border-t">
        <div className="container-pro py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 grid place-content-center text-white text-sm font-bold">RM</div>
                <span className="font-semibold">ResumeMentor</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">Resume reviews and mentorship from real practitioners.</p>
            </div>
            <div className="text-sm">
              <div className="font-semibold mb-3">Product</div>
              <ul className="space-y-2">
                <li><a href="/mentors" className="text-gray-600 hover:text-gray-900">Mentors</a></li>
                <li><a href="/upload" className="text-gray-600 hover:text-gray-900">Upload</a></li>
                <li><a href="/login" className="text-gray-600 hover:text-gray-900">Login</a></li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="font-semibold mb-3">Company</div>
              <ul className="space-y-2">
                <li><a href="/traction" className="text-gray-600 hover:text-gray-900">Traction</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="hr my-8"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ResumeMentor. All rights reserved.</p>
            <p>Made with ❤️ for mentees and mentors.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
