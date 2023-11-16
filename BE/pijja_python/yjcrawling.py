from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains
import time
import re

# Chrome WebDriver의 경로 설정
chrome_driver_path = "C:/chromedriver/chromedriver.exe"  # C 드라이브의 경로에 따라 설정

# Chrome WebDriver 서비스 초기화
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized")  # 웹 브라우저를 최대화합니다.
service = webdriver.chrome.service.Service(chrome_driver_path)

# Chrome WebDriver를 초기화합니다.
driver = webdriver.Chrome(service=service, options=chrome_options)
act = ActionChains(driver)

# 결과를 저장할 리스트
result_data = []

try:
    for page_number in range(1, 12): 
        page_url = f"https://www.visitjeju.net/kr/recommendTour/recommendScheduleList?page={page_number}"
        driver.get(page_url)

        # 각 제목에 대한 링크 찾기
        titles = driver.find_elements(By.CLASS_NAME, "s_tit")
        for title in titles:
            title_text = title.text
            title.click() 

            WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, "name")))
            
            p_txt_elements = driver.find_elements(By.CLASS_NAME, "txt")
            p_txt_tag = driver.find_elements(By.CLASS_NAME, "tag")
            
            txt_data = [element.text for element in p_txt_elements]
            txt_tag = [element.text for element in p_txt_tag]
            days_match = re.search(r'(\d+)일', txt_data[1])
            duration = days_match.group(1)
            total_day = re.sub(r'\D', '', duration)
            
            result_data.append({"제목": title_text, "세부내용": txt_data, "태그": txt_tag, "기간": total_day + '일'})
            
            time.sleep(1)
            
            if(total_day == 2) :  
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
            elif(total_day == 3 or total_day == 4):
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                time.sleep(0.5)
                next_btn = driver.find_element(By.CLASS_NAME, "btn_next")
                act.click(next_btn).click(next_btn).perform()
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
            elif(total_day == 5 or total_day == 6):
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                time.sleep(0.5)
                next_btn = driver.find_element(By.CLASS_NAME, "btn_next")
                act.click(next_btn).click(next_btn).perform()
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                time.sleep(0.5)
                next_btn = driver.find_element(By.CLASS_NAME, "btn_next")
                act.click(next_btn).click(next_btn).perform()
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
            elif(total_day == 7 or total_day == 8):
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                time.sleep(0.5)
                next_btn = driver.find_element(By.CLASS_NAME, "btn_next")
                act.click(next_btn).click(next_btn).perform()
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                time.sleep(0.5)
                next_btn = driver.find_element(By.CLASS_NAME, "btn_next")
                act.click(next_btn).click(next_btn).perform()
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                time.sleep(0.5)
                next_btn = driver.find_element(By.CLASS_NAME, "btn_next")
                act.click(next_btn).click(next_btn).perform()
                name_elements = driver.find_elements(By.CLASS_NAME, "name")
                name_data.append(element.text for element in name_elements)
                
            time.sleep(1)
            
            name_elements = driver.find_elements(By.CLASS_NAME, "name")
            name_data = [element.text for element in name_elements]
            result_data.append({"name": name_data})
            # 다시 목록 페이지로 돌아가기
            driver.execute_script("window.history.go(-1)")
            
except Exception as e:
    print(f"An error occurred: {str(e)}")
finally:
    driver.quit()

# 수집한 데이터 출력
for data in result_data:
    print(data)
