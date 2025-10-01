from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .settings import settings
from supabase import create_client, Client
import time

app = FastAPI(title="ResumeMentor API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.CORS_ORIGINS.split(",") if origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_supabase() -> Client:
    if not settings.SUPABASE_URL or not settings.SUPABASE_KEY:
        raise RuntimeError("Supabase env vars not configured.")
    return create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

@app.get("/")
def root():
    return {"message": "ResumeMentor API running", "version": "1.0.0"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/mentors")
def mentors():
    # mock data for now; replace with DB later
    return [
        {"id": 1, "name": "Aisha Khan", "title": "Senior PM @ FinTech", "skills": ["Roadmapping","Interviews","Strategy"]},
        {"id": 2, "name": "Diego Santos", "title": "Staff Eng @ Cloud", "skills": ["System Design","Resume Review","Backend"]},
        {"id": 3, "name": "Mei Lin", "title": "Design Lead @ Health", "skills": ["Portfolio","UX Writing","Critique"]},
    ]

@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    try:
        supa = get_supabase()
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))

    if file.content_type not in ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/msword"]:
        raise HTTPException(status_code=400, detail="Only PDF or DOCX allowed.")

    data = await file.read()
    key = f"uploads/{int(time.time())}-{file.filename}"
    try:
        res = supa.storage.from_(settings.SUPABASE_BUCKET).upload(key, data)
        if res.get("error"):
            raise Exception(res["error"]["message"])
        public_url = supa.storage.from_(settings.SUPABASE_BUCKET).get_public_url(key)
        return {"key": key, "public_url": public_url}
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"Upload failed: {ex}")
