# ResumeMentor — Investor Demo (Full App)

A polished, demo-ready app to impress investors: premium frontend, clear KPIs, and a working backend upload API.

## Structure
```
resumementor-investor-demo/
├─ frontend/   # Vercel-ready SPA with Landing, Mentors, Dashboard, Upload, Traction, About
└─ backend/    # FastAPI + Dockerfile (Railway/Render), /mentors and /upload-resume
```

## Demo Script (talk track)
1) **Problem & Hook**: Resumes are judged in seconds; most candidates guess what to change.
2) **Solution**: ResumeMentor pairs mentees with vetted mentors; inline, pinned feedback cuts revision cycles by 70%.
3) **Live Demo**:
   - Landing hero → show KPI cards.
   - Mentors page → quality of supply.
   - Upload page → upload a PDF; show secure public URL.
4) **Moat & Go-to-Market**: Reviewer graph, UX speed, supply quality. Universities + SEO + partnerships.
5) **Ask**: Funding to scale mentor onboarding and add payments/scheduling natively.

## Quick start

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173

Set `frontend/.env` if backend URL differs:
```
VITE_API_URL=http://localhost:8000
```

### Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # fill values
uvicorn app.main:app --reload --port 8000
```

### Deploy
- Frontend → Vercel
  - Build: `npm run build`
  - Output: `dist`
  - Env: `VITE_API_URL=https://your-api.up.railway.app`
- Backend → Railway/Render (Docker)
  - Add env vars from `.env.example`
  - Deploy; copy public URL into Vercel env

## Roadmap (MVP → V1)
- Supabase Auth (Google/GitHub), profiles, mentor directory from DB
- Review object (JSON), comment pins, status tracking
- Booking embeds (Cal.com/Calendly), later native scheduling
- Emails via Brevo/SMTP
- Payments (Stripe Checkout + Connect Express)

Show, don’t tell — run the demo and let the UI & flow speak for itself.
