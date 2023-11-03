from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class position(BaseModel):
    x: float
    y: float

class routgetRequestCommandDto(BaseModel):
    totalDistance: int
    start: position
    
    end: position
    movingPositionList: List[position]

@app.get("/check")
def test2(data: routgetRequestCommandDto):
 

    return data