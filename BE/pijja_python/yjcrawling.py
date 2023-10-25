from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Chrome WebDriver의 경로 설정
chrome_driver_path = "C:/chromedriver/chromedriver.exe"  # C 드라이브의 경로에 따라 설정

# Chrome WebDriver 서비스 초기화
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized")  # 웹 브라우저를 최대화합니다.
service = webdriver.chrome.service.Service(chrome_driver_path)

# Chrome WebDriver를 초기화합니다.
driver = webdriver.Chrome(service=service, options=chrome_options)

# 결과를 저장할 리스트
result_data = []

try:
    for page_number in range(1, 12):  # 페이지 범위를 1부터 11까지 변경
        page_url = f"https://www.visitjeju.net/kr/recommendTour/recommendScheduleList?page={page_number}"
        driver.get(page_url)
        time.sleep(2)

        # 각 제목에 대한 링크 찾기
        titles = driver.find_elements(By.CLASS_NAME, "s_tit")

        for title in titles:
            title_text = title.text
            title.click()  # 제목을 클릭하여 세부 내용 페이지로 이동
            time.sleep(2)

            # 세부 내용 페이지에서 데이터 추출
            detail_elements = driver.find_elements(By.CLASS_NAME, "name")
            detail_data = [element.text for element in detail_elements]

            result_data.append({"Title": title_text, "name": detail_data})

            # 뒤로 가기 버튼을 클릭하여 다시 목록 페이지로 이동
            driver.back()
            
        time.sleep(2)

except Exception as e:
    print(f"An error occurred: {str(e)}")
finally:
    driver.quit()

# 크롤링한 데이터 출력
for data in result_data:
    print(data)
