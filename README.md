# discord_anonymous_chat

## first publish here! 
 ->| https://blog.naver.com/dduri-8674/223326698605


---

# 🚀 Development Environment
- 🛠️ **Node.js** (v21.5.0)
- 🖥️ **Ubuntu** 20.04.6 LTS
- 💬 **discord.js** (v14.14.1)

---

<Eng>\
# 🚀 How to Use

## 1. Create a Discord Bot
- 🔗 Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new bot.
- 🔑 Copy the bot token and replace the `Token` placeholder in the code.

## 2. Install Dependencies
- 📂 Create a working directory.
- 🖥️ Open a terminal and run:
  ```sh
  npm install discord.js@14.14.1

  npm install dotenv (+ v2.0)
  npm install path (+ v2.0)
  npm install axios (+ v2.0)
  npm install fs (+ v2.0)
  npm install crypto (+ v2.0)
 
  ```
  *(Requires Node.js to be installed)*

## 3. Setup the Bot Script
- 📜 Create a `.js` file inside your working directory.
- ✏️ Open the file using any text editor and paste the provided code.

## 4. Usage
- 💬 To send messages to a specific chat channel:
  - 🖱️ Right-click the channel (on PC) and select **Copy Channel ID**.
  - 📋 Paste the Channel ID in the designated spot in the code.
  -----------
  - (+ v2.0) generate 'imp.env' and input detail.
  - client_Id=bot-ID
  - app_Id=Application-ID
  - app_channel_Id=channel-ID
  -----------
- 📌 In the target chat room:
  - ✍️ Add `-anonymous_input` to the channel description and save.

## 5. Running the Bot
- 🔄 Open the terminal and navigate to the script's directory:
  ```sh
  cd /path/to/your/file
  ```
- ▶️ Run the script:
  ```sh
  node (filename).js
  ```
- ⚡ The bot will only function while the script is running.
- 🌍 To keep it running 24/7, leave your computer on and keep the script running.


--------------------------------------------------------
<Kor>\
# 🚀 사용 방법

## 1. 디스코드 봇 생성하기
- 🔗 [디스코드 개발자 포털](https://discord.com/developers/applications)에서 새 봇을 생성.
- 🔑 봇 토큰을 복사하여 코드의 `Token` 위치에 붙여넣기.

## 2. 필요한 패키지 설치
- 📂 작업 폴더를 생성.
- 🖥️ 터미널을 열고 아래 명령어 실행:
  ```sh
  npm install discord.js

  npm install dotenv (+ v2.0)
  npm install path (+ v2.0)
  npm install axios (+ v2.0)
  npm install fs (+ v2.0)
  npm install crypto (+ v2.0)
  ```
  *(Node.js 필요)*

## 3. 봇 스크립트 설정
- 📜 작업 폴더 안에 `.js` 파일을 하나 생성.
- ✏️ 원하는 텍스트 편집기로 열어 제공된 코드를 붙여넣기.

## 4. 사용하기
- 💬 특정 채팅 채널에 메시지를 보내려면:
  - 🖱️ PC 기준 채널을 우클릭 후 **채널 ID 복사하기** 선택.
  - 📋 코드 내 지정된 위치에 채널 ID 붙여넣기.
  -----------
  - (+ v2.0) imp.env 파일을 생성하고 아래 내용에 올바르게 채워넣기
  - client_Id=bot-ID
  - app_Id=Application-ID
  - app_channel_Id=channel-ID
  -----------
- 📌 메시지를 보낼 채널의 설명에 `-anonymous_input`을 추가하고 저장.

## 5. 봇 실행하기
- 🔄 터미널에서 스크립트 파일이 위치한 경로로 이동:
  ```sh
  cd /파일이_위치한_경로
  ```
- ▶️ 스크립트 실행:
  ```sh
  node (파일이름).js
  ```
- ⚡ 실행 중일 때만 봇이 작동.
- 🌍 24시간 사용하려면 컴퓨터를 계속 켜두고 실행 유지.

--------------------------------------------------------

# 🚀 Version Info

---

## v1.0
- Transport and indication channels are separated, and anonymous chat push notifications cause anonymous exposure issues.

## v2.0
### 🛠 Patch
- **Slash Command Added** | No need to specify a sending channel; confirmation messages are visible only to the sender, improving security.
- **Usable Anywhere** | Complete anonymity ensured.
- **Encrypted ID** | Added for user differentiation.
- **imp.env Support** | Secure management of sensitive information.
- **File Attachment Support** | Enables sending images and files.
- **Custom Bot Status Messages** | Various status messages can be configured.

### ⚠ Important!
- If a log error occurs, please create a `logs` folder.

---

# 🚀 버전 정보

## v1.0
- 전송 채널과 표시 채널이 분리되어있으며 익명 채팅 푸시 알림으로 익명 노출 문제가 발생함.

## v2.0
### 🛠 패치
- **슬래시 커맨드 추가** | 전송할 채널을 지정할 필요 없이, 전송 완료 메시지는 본인에게만 표시되어 안전성 강화.
- **어디서나 사용 가능** | 완전한 익명성 보장.
- **암호화 ID 추가** | 사용자 구별 가능.
- **imp.env 지원** | 중요한 정보 안전하게 관리.
- **파일 첨부 기능 추가** | 이미지 및 파일 전송 가능.
- **봇의 다양한 상태 메시지 설정 가능** | 원하는 상태 메시지를 자유롭게 설정.

### ⚠ 중요!
- 로그 오류가 발생하면 `logs` 폴더를 생성하세요.


