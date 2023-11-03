from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def test():
    return '테스트 완료'

