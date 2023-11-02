import pandas as pd
from gensim.models import Word2Vec
import numpy as np

# Word2Vec 모델 로드
model = Word2Vec.load("word2vec.model")

# Excel 파일 로드
df = pd.read_excel("C:\\Users\\SSAFY\\Downloads\\recommadStudyData.xlsx")

# NaN 값을 빈 문자열로 대체
df['alltag'] = df['alltag'].fillna('')


# 태그의 평균 벡터를 계산하는 함수
def get_average_vector(tag_string):
    # 쉼표로 구분된 태그를 리스트로 변환
    tags = tag_string.split(',')
    
    # 벡터를 저장할 리스트
    vectors = []
    
    for tag in tags:
        try:
            # 태그의 벡터를 모델에서 추출
            vector = model.wv[tag]
            vectors.append(vector)
        except KeyError:
            # 모델에 태그가 없는 경우
            continue
    
    # 모든 벡터의 평균을 계산
    if len(vectors) > 0:
        average_vector = np.mean(vectors, axis=0)
    else:
        # 벡터가 없는 경우, None을 반환
        average_vector = None
    
    return average_vector

# 태그를 개별 벡터로 변환하는 함수
def tag_to_vector(tag_string):
    tags = tag_string.split(',')
    tag_vectors = {}
    for tag in tags:
        try:
            tag_vectors[tag] = model.wv[tag].tolist()  # 각 태그의 벡터를 리스트로 변환
        except KeyError:
            continue
    return tag_vectors

# 각 여행지의 태그를 벡터로 변환
df['tag_vectors'] = df['alltag'].apply(tag_to_vector)

# 각 여행지에 대한 태그들의 평균 벡터를 계산
df['average_vector'] = df['alltag'].apply(get_average_vector)

# 새로운 데이터프레임 생성
output_df = df[['title', 'alltag', 'tag_vectors', 'average_vector']]

# Excel 파일로 저장
output_df.to_excel("tag_vectors_with_average.xlsx", index=False)
