var tipuesearch = {"pages": [{'title': 'About', 'text': '四設計二甲 41023116 吳勁毅 \n 倉儲:\xa0 https://github.com/mdecad2022/site-WUJINGYI112233 \n \n 網頁:\xa0 https://mdecad2022.github.io/site-WUJINGYI112233/content/index.html \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Schedule', 'text': '', 'tags': '', 'url': 'Schedule.html'}, {'title': 'w1', 'text': '\n 中秋節放假 \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '\n 上課內容: \n 1.建立41023116@nfu.edu.tw的Microsoft帳號 \n 2.建立Replit個人帳號 \n 3.建立one shape個人帳號 \n ____________________________________________________________________________________ \n 心得:一開始在Replit上遇到許多問題但還是經過自己看影片和問老師來把問題解決 \xa0 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '\n 透過 mdecad2022 的 organization 建立個人可以管理的倉儲 (site-Github_帳號) \xa0 \n 利用 replit 帳號所啟動的動態網站進行內容管理 \xa0 \n 動態轉為靜態後, 與 Github 倉儲同步. \xa0 \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '第四週上課筆記 \xa0 \n \xa0 \xa0 \n 在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n git submodule update --init --recursive \xa0 \n pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \xa0 \n 考試主機:\u202f \xa0 https://exam.cycu.org \u202f \xa0 \n \xa0 \n 每一位學員已經學會利用雲端與近端工具維護個人倉儲與網頁 \xa0 \n \n 近端工具: 下載\xa0\xa0 \xa0 portable_python_3.10.6.7z \xa0 \n \xa0\xa0\xa0 Portablegit \xa0 \n 雲端工具: Replit \xa0 \n Web 分散式版次管理:\xa0 \xa0 https://github.com \xa0 \xa0 \n \xa0 \n 電腦輔助繪圖工具:\xa0 \xa0 \n \xa0\xa0\xa0 近端 NX2027 與 Solvespace \xa0 \n \xa0\xa0\xa0 雲端: \xa0 https://onshape.com \xa0 \xa0 \n Notebook 權限設定 - 在瀏覽器中開啟 - 右上方 Share – Manage Access \xa0 \n _________________________________ \xa0 \n \xa0 \n 登入 Github \xa0 \n 登入 Replit \xa0 \n 登入 Onedrive ,\xa0 \xa0 \n 遠端使用外部網路, 必須設定 140.130.17.4 port 3128 代理主機, 帳密都為: kmolab \xa0 \n \xa0 https://exam.cycu.org \xa0 \xa0 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '\xa0 \xa0 \xa0 上課筆記 \n \n \xa0登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh\xa0 cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp\xa0 帳號@stud.cycu.org \xa0\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0\xa0 git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodule update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),\xa0 https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source\xa0 acp \xa0以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,\xa0 git config\xa0 --global user.email,\xa0 git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n 心得:前面要git-clone時都失敗同學也不知道甚麼問題,所以直接去問老師所以順利解決了 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '\n 請分別利用 Solvespace、Onshape 與 NX2027 繪製\xa0\xa0 Base_Clamp 零件. \xa0 \xa0 \n 完成後請將零件繪圖過程與畫面送至個人 H1 標題 cad2022 下的 H2 Solvespace、Onshape、NX2027 頁面中, 並將工程圖與零件檔案放入頁面連結. \xa0 \n \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '期中考', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w6', 'text': '零件一練習 \n \n \n 零件二練習 \n \n \n 零件三練習 \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'Solvespace', 'text': '\n onelink.7z \n \n \n \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'NX', 'text': '', 'tags': '', 'url': 'NX.html'}, {'title': 'Onshape', 'text': 'Base-URL:  https://cad.onshape.com/documents/faecca294daf7d6daf13b981/w/0f8d448850005e440e53435e/e/d5d936bfec3ed166e35695dc?renderMode=0&uiState=63a55171548cb94fd35aa5d5 \n \n Shaft-URL:  https://cad.onshape.com/documents/b76c8df1cba2e1fae5604d37/w/e7b99414c977f65622f8e6cc/e/5e40670ad0b72a563bbe7b84?renderMode=0&uiState=63a55163548cb94fd35aa5cc \n \n \n Untitled-URL:  https://cad.onshape.com/documents/0b4c5a1580977ab294525829/w/7f6c607cd9eb8752a5dd0952/e/76ef968cc14aed021f887ab4?renderMode=0&uiState=63a5512cf761b9323f9ca7fb \n \n \n Assemble-URL:  https://cad.onshape.com/documents/dafe744f0ba267e0ca3f7d50/w/5ffb15e730f2041970a6e1a4/e/b6176e9de052be6bdd7a94dd \n \n \n \n \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'w15', 'text': '1.slve space零件導入 \n', 'tags': '', 'url': 'w15.html'}]};