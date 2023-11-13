from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from settings import DATABASE_USER, DATABASE_PASSWORD

DB_URL = f'mysql+pymysql://{DATABASE_USER}:{DATABASE_PASSWORD}@k9a605.p.ssafy.io:3306/pijja'


class engineconn:

    def __init__(self):
        print(f"DB_URL : {DB_URL}")
        self.engine = create_engine(DB_URL, pool_recycle=500)

    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session

    def connection(self):
        conn = self.engine.connect()
        return conn