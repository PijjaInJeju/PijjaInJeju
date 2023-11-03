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
   # totalDistance가 제공되면 1번은 수행할 필요 없음
    # 1. start지점과,  end지점의 직선거리가 3km이상인지 아닌지 확인
     
    
    # 2. 두 지점 사이의 거리가 3km이하인 경우  
    if (data.totalDistance < 3000):

    # 3. 두 지점 사이의 거리가 3km 초과인 경우  
    else:
         

    return data