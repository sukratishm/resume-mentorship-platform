import { API_BASE } from "../lib/config";
import { useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e){
    e.preventDefault();
    setError(""); setResult(null);
    if(!file){ setError("Please choose a file."); return; }
    const form = new FormData(); form.append("file", file);
    setLoading(true);
    try{
      const r = await fetch(`${API_BASE}/upload-resume`, { method:"POST", body: form });
      const j = await r.json();
      if(!r.ok) throw new Error(j.detail || "Upload failed");
      setResult(j);
    }catch(err){ setError(err.message); }
    finally{ setLoading(false); }
  }

  return (
    <div className="section max-w-2xl mx-auto">
      <form onSubmit={onSubmit} className="card card-p">
        <h1 className="text-2xl font-bold">Upload your resume</h1>
        <p className="text-gray-600 mt-1">PDF or DOCX. Max 10MB.</p>
        <div className="hr my-6"></div>

        <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/40 transition">
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e)=> setFile(e.target.files?.[0] || null)} />
          <div className="text-5xl">📄</div>
          <div className="mt-3 font-medium">{file ? file.name : "Drag & Drop or click to choose"}</div>
          <div className="text-sm text-gray-500">We generate a secure link – you control who can view.</div>
        </label>

        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
        {result && (
          <div className="mt-4 text-sm">
            <div className="text-emerald-700 font-medium">Uploaded!</div>
            <div className="text-gray-600 break-all">Public URL: {result.public_url}</div>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button className="btn btn-primary btn-md" disabled={loading}>{loading? "Uploading..." : "Upload"}</button>
          <a className="btn btn-ghost btn-md" href="/dashboard">Go to Dashboard</a>
        </div>
      </form>
    </div>
  );
}
