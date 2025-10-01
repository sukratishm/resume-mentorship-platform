from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="ResumeMentor API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "ResumeMentor API is running!",
        "status": "healthy",
        "version": "1.0.0"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.get("/api/test")
async def test():
    return {"message": "API working!"}
