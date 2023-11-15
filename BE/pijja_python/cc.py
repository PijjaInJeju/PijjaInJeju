import pandas as pd

df = pd.read_csv('최종.csv', encoding="cp949")

# df = df.reset_index(drop = True)

tag_colums = ["tag_" + tag for tag in ["식도락 여행", "쇼핑", "레저와 체험", "전시와 행사", "제주의 문화유산", "천천히 걷기", "휴식과 치유여행", "공항"]]
for tag_col in tag_colums:
    df[tag_col] = df['tag'].apply(lambda x: 1 if tag_col[4:] in x else 0)

print(df)
