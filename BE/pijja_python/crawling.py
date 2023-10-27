from selenium import webdriver
from selenium.webdriver import ActionChains
import urllib
import pandas as pd

class Netflix_content_crawling_class:
    def __init__(self, word_list):
        self.word_list=word_list
        self.word_key=0
        self.content_key=0
        self.driver=None
        
        self.content_list=[] 
        self.casting_list=[]
        self.genre_list=[]
        self.feature_list=[]

    def login(self, id, pw):
        print("넷플릭스 접속 중...")
        # 크롬 드라이버 경로 지정
        self.driver = webdriver.Chrome('C:/Users/User/chromD/chromedriver.exe')

        # get 명령으로 접근하고 싶은 주소 지정
        url="https://www.netflix.com/browse"  
        self.driver.get(url)  #브라우저 접속

        #로그인 
        self.driver.implicitly_wait(3)  #대기
        self.driver.find_element_by_id('id_userLoginId').send_keys(id)  #id값
        self.driver.find_element_by_id('id_password').send_keys(pw)

        self.driver.find_element_by_xpath('//*[@id="appMountPoint"]/div/div[3]/div/div/div[1]/form/button').click()  #로그인 버튼
        self.driver.implicitly_wait(3)

        #넷플릭스 시청할 프로필 선택
        self.driver.find_element_by_xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[1]/div[2]/div/div/ul/li[1]/div/a/div/div').click() #프로필 버튼
        self.driver.implicitly_wait(3)
        print("넷플릭스 접속 완료")

    def image_crawling(self, w):
        img_list=[]
        for i in range(5):
            img=self.driver.find_element_by_xpath('//*[@id="title-card-0-'+str(i)+'"]/div[1]/a/div[1]/img').get_attribute('src')
            img_list.append(img)
            path="저장할 로컬 주소"+str(i+1)+".png" 
            urllib.request.urlretrieve(img, path)
            img=""
            
        return img_list
    
    def content_crawling(self, w, image_list):
        print(str(self.word_key)+"/4 번 째 단어 콘텐츠 크롤링 중...")
        
        for i in range(5):  
            self.content_key+=1
            
            #_____________________title, story, image__________________________________
            content=[]  #키값, word_key값, 제목, 줄거리, 이미지 
            content.append(self.content_key) #키값
            content.append(self.word_key)    #word_key값

            title=""
            title=self.driver.find_element_by_xpath('//*[@id="title-card-0-'+str(i)+'"]/div[1]/a/div[1]/div/p').text  #제목
            content.append(title)
                
            #모달 이동
            modal=self.driver.find_element_by_css_selector("#title-card-0-"+str(i)+" > div.ptrack-content").click()
            self.driver.implicitly_wait(2)
            self.driver.get(self.driver.current_url)  #모달창으로 이동
            self.driver.implicitly_wait(3)

            story=""
            try:
                story=self.driver.find_element_by_xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[2]/div/div[3]/div/div[1]/div/div/div[1]/p/div').text  #줄거리 
                content.append(story)
            except Exception as e:
                content.append("NULL")
               
            content.append(image_list[i])
            self.content_list.append(content)   
            content.clear    #초기화
            
            #__________________casting, genre, feature___________________
            right_modal_list=self.driver.find_elements_by_class_name('previewModal--tags')  #오른쪽 출연, 장르, 특징 모두 크롤링
            content_feature_list=[]
                
            try: 
                for i in range(3):
                    content_feature_list.append(list(right_modal_list[i].text.split(', ')))
            except Exception as e:
                pass
            right_modal_list=[]   #초기화
        
            #필요없는 문자 제거//여기서 정하자! 출연진,장르, 특징 뒤섞이는 거 방지
            for c in content_feature_list:  
                if '더 보기' in c: c.remove('더 보기')
                edit=c[0].split(': ')
                c.pop(0)
                c.insert(0, edit[0]); c.insert(1, edit[1])

            #출연진
            casting=[self.content_key]
            try:
                if content_feature_list[0][0]=="출연":  #index out of range
                    del content_feature_list[0][0]
                    
                    for c in content_feature_list[0]:  
                        casting.append(c)
                        self.casting_list.append(casting)
                        casting.clear; casting=[self.content_key]
                else:
                    casting.append("NULL")
                    self.casting_list.append(casting)
            except IndexError:
                pass
                
            
            #장르
            genre=[self.content_key]
            try:
                if content_feature_list[1][0]=="장르":  #index out of range
                    del content_feature_list[1][0]
                    
                    for c in content_feature_list[1]:  
                        genre.append(c)
                        self.genre_list.append(genre)
                        genre.clear; genre=[self.content_key]
                else:
                    genre.append("NULL")
                    self.genre_list.append(genre)
            except IndexError:
                pass
                  
            #콘텐츠 특징  
            feature=[self.content_key] 
        
            try:
                if content_feature_list[2][0]=="시리즈 특징" or content_feature_list[2][0]=="영화 특징":  #index out of range
                    del content_feature_list[2][0]
                    
                    for c in content_feature_list[2]:  
                        feature.append(c)
                        self.feature_list.append(feature)
                        feature.clear; feature=[self.content_key]
                else:
                    feature.append(w)
                    self.feature_list.append(feature)
            except IndexError:
                pass 
                
            self.driver.back()   #뒤로가기
            self.driver.implicitly_wait(3)
            print("#", end="")
            
        print("\n"+str(self.word_key)+"/4 번 째 단어 콘텐츠 크롤링 완료")
            
    def save(self):
        print("데이터 저장 중...")
        
        content_df=pd.DataFrame(self.content_list, columns=['key', 'word_Key', 'title', 'story', 'img'])  #데이터 프레임에 크롤링한 정보 입력, 
        casting_df=pd.DataFrame(self.casting_list,columns=['key', 'name'])
        genre_df=pd.DataFrame(self.genre_list, columns=['key', 'genre'])
        feature_df=pd.DataFrame(self.feature_list,columns=['key','feature'])

        content_df.to_csv("저장할 로컬 주소/파일 이름.csv", header=False, encoding='euc-kr', index=False)  #저장할 로컬 주소
        casting_df.to_csv("저장할 로컬 주소/파일 이름.csv", header=False, encoding='euc-kr', index=False)
        genre_df.to_csv("저장할 로컬 주소/파일 이름.csv", header=False, encoding='euc-kr', index=False)
        feature_df.to_csv("저장할 로컬 주소/파일 이름.csv", header=False, encoding='euc-kr', index=False)
    
        print("데이터 저장 완료")
        
    def run(self):
        self.login() #로그인 id, pw전달 
        
        for w in self.word_list:
            self.word_key+=1 
            try:
                self.driver.find_element_by_xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[1]/div[1]/div/div/div/div[1]/div/button').click()  #검색창 클릭
            except Exception as e:
                pass
            
            self.driver.find_element_by_name("searchInput").send_keys(w)  #키워드 검색
            try :
                self.driver.find_element_by_xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[1]/div[1]/div/div/div/div[1]/div/div/span[1]').click() #검색창 클릭
            except Exception as e:
                pass
            
            image_list=self.image_crawling(w)    #이미지 크롤링
            self.content_crawling(w,image_list)  #콘텐츠 크롤링
            self.driver.back()
            
        self.save()
        print("콘텐츠 정보 크롤링 완료")
        
test_list=['우리', '수업', '사람', '담배']  #카카오톡 최빈다 단어 상위 4개 리스트 
test=Netflix_content_crawling_class(test_list)
test.run()