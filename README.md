<h1 align="center">🚀 LivecodeX</h1>

<h3 align="center">
A Modern Full-Stack Live Coding Interview Platform
</h3>

<p align="center">
  Conduct live coding interviews with real-time video calling, collaborative code editing, secure authentication, coding practice, and multi-language code execution using an online compiler API.
</p>

<p align="center">
  <img src="./frontend/public/screenshot-for-readme.png" alt="LivecodeX Banner"/>
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge)
![Stream](https://img.shields.io/badge/Stream-Video_&_Chat-005FFF?style=for-the-badge)
![Inngest](https://img.shields.io/badge/Inngest-Background_Jobs-000000?style=for-the-badge)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios)
![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-VS_Code-007ACC?style=for-the-badge)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-Code_Hosting-181717?style=for-the-badge&logo=github)

</p>

---

# ✨ Features

### 👨‍💻 Coding Experience

- 💻 VS Code-like Monaco Editor
- 🌙 Dark & Light Theme Support
- 🌍 Multi-language Code Support
- ▶️ Real-time Code Execution
- 🧪 Custom Code Testing
- 📋 Copy Code
- 💾 Save Code
- 🧩 Coding Practice Mode
- 📚 Multiple Coding Problems
- 🎯 Automatic Test Case Evaluation

---

### 🎥 Live Interview

- 🎥 1-on-1 Video Interview Rooms
- 💬 Real-Time Chat
- 🎙️ Microphone Toggle
- 📷 Camera Toggle
- 🖥️ Screen Sharing
- 🎥 Interview Recording
- 🔒 Private Interview Rooms (Maximum 2 Participants)

---

### 🔐 Authentication

- Clerk Authentication
- Protected Routes
- User Profiles
- Secure Sessions

---

### 📊 Dashboard

- Live Interview Statistics
- Coding Dashboard
- Interview History
- Recent Activity

---

### ⚙️ Backend

- REST API using Express.js
- MongoDB Database
- Mongoose ODM
- Clerk Backend Authentication
- Inngest Background Jobs
- Stream Video SDK
- OnlineCompiler API integration
- Code execution API

---

### 🧪 Code Execution

- ⚡ Online code execution using OnlineCompiler API
- 🐍 Python execution
- ☕ Java execution
- 🔵 C execution
- 🟣 C++ execution
- ▶️ Run code directly from the Monaco Editor
- 📤 Program input support
- 📋 Real-time output display
- ❌ Compilation and runtime error handling
- 🎯 Automatic test case evaluation

---

### 🎨 UI/UX

- Responsive Design
- Modern UI
- Beautiful Animations
- Toast Notifications
- Confetti Animation
- Clean Dashboard

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- JSX
- Tailwind CSS
- Monaco Editor
- React Router DOM
- TanStack Query
- Axios
- Clerk Authentication
- Stream Video SDK
- Framer Motion
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Clerk Backend SDK
- Inngest
- Stream SDK
- Axios
- OnlineCompiler API

---

# 📂 Project Structure

```text
LivecodeX
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── data
│   │   └── lib
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controller
│   │   ├── routes
│   │   ├── services
│   │   ├── middleware
│   │   └── lib
│   └── package.json
│
├── README.md
```

---

# 🧪 Environment Variables

## Backend (`backend/.env`)

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

CLIENT_URL=http://localhost:5173

CLERK_SECRET_KEY=your_clerk_secret_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

ONLINE_COMPILER_API_KEY=your_onlinecompiler_api_key
```

---

## Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:3000/api

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_STREAM_API_KEY=your_stream_api_key
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/S-K-Roy18/LivecodeX.git

cd LivecodeX
```

---

## Install Backend

```bash
cd backend

npm install

npm run dev
```

Backend will run at:

```
http://localhost:3000
```

---

## Install Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Authentication | Clerk |
| Video & Chat | Stream |
| Code Execution | OnlineCompiler API |



---

# 📅 Roadmap

- ✅ Live Coding Editor
- ✅ Authentication
- ✅ Video Interviews
- ✅ Chat System
- ✅ Screen Sharing
- ✅ Dashboard
- ✅ Coding Practice
- ✅ Multi-language Code Execution
- ✅ Python Support
- ✅ Java Support
- ✅ C Support
- ✅ C++ Support
- ✅ Automatic Test Case Evaluation
- 🔄 Submission History
- 🔄 AI Interview Feedback
- 🔄 Collaborative Whiteboard

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub.

---

## 🌐 Connect With Me

<p align="left">

<a href="mailto:suryarahulroy321@gmail.com">
  <img src="https://img.shields.io/badge/Email-suryarahulroy321%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/>
</a>

<a href="https://github.com/S-K-Roy18">
  <img src="https://img.shields.io/badge/GitHub-S--K--Roy18-181717?style=for-the-badge&logo=github"/>
</a>

<a href="https://www.linkedin.com/in/surya-kanta-roy-363866338/">
  <img src="https://img.shields.io/badge/LinkedIn-Surya%20Kanta%20Roy-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

</p>

---

# 📜 License

This project is licensed under the MIT License.

---

<p align="center">

Made with ❤️ by <b>Surya Kanta Roy</b>

</p>