import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MentorDirectory from "./pages/MentorDirectory";
import MenteeDashboard from "./pages/MenteeDashboard";
import ResumeUpload from "./pages/ResumeUpload";
import TractionPage from "./pages/TractionPage";
import AboutPage from "./pages/AboutPage";

export default function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/mentors" element={<MentorDirectory/>}/>
          <Route path="/dashboard" element={<MenteeDashboard/>}/>
          <Route path="/upload" element={<ResumeUpload/>}/>
          <Route path="/traction" element={<TractionPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
