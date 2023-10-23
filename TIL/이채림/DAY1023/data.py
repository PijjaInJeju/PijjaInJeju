import pandas as pd

# 데이터 불러오기
df = pd.read_excel('C:\\Users\\SSAFY\\Desktop\\convertcsv.xlsx')

# 분류를 위한 함수
def classify_title(title):
    # title이 문자열이 아니면 바로 "분류 불가" 반환
    if not isinstance(title, str):
        return "분류 불가"

    couple_keywords = ['여자친구', '남자친구', '애인', '커플', '신혼', '부부']
    friend_keywords = ['친구', '고등학교', '중학교', '초등학교']
    family_keywords = ['어머니', '부모님', '아버지', '엄마', '아빠', '네', '장인', '장모', '처가', '시댁', ]
    alone_keywords = ['혼자', '혼행', '나홀로', '싱글']

    
    for keyword in couple_keywords:
        if keyword in title:
            return "커플"
    for keyword in friend_keywords:
        if keyword in title:
            return "친구"
    for keyword in parents_keywords:
        if keyword in title:
            return "가족"
    for keyword in alone_keywords:
        if keyword in title:
            return "혼자"
    return "분류 불가"

# "여행일정타이틀" 기반 분류 수행
df['MATE'] = df['여행일정타이틀'].apply(classify_title)

# 결과 저장
df.to_excel('test.xlsx', index=False)
