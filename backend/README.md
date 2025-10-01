# ResumeMentor Backend (Investor Demo)

## Local run
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # then fill values
uvicorn app.main:app --reload --port 8000
```

## Deploy (Railway/Render)
- New project → add this `backend/` folder (Dockerfile present)
- Add environment variables from `.env.example`
- Deploy and note the public URL, e.g. `https://your-api.up.railway.app`
