from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class position(BaseModel):
    x: float
    y: float


