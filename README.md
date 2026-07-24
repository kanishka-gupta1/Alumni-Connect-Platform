# 🧑‍🎓 Alumni Connect Platform

A full-stack web platform designed to bridge the gap between students and alumni, enabling mentorship, career guidance, and professional networking.

## ✨ Features
- Student and Alumni Sign-up/Login
- Alumni can post opportunities and answer questions
- Students can ask doubts and request to connect
- User dashboards with profile views
- Secure authentication and cloud image storage

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Cloudinary (for image uploads), JWT (for authentication)

## 📁 Folder Structure

```
Alumni_Connect/
├── backend/   # Node.js + Express + MongoDB API
└── frontend/  # React frontend using Vite + Tailwind
```



## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/kanishka-gupta1/Alumni-Connect-Platform.git
cd Alumni-Connect-Platform



cd backend
npm install
npm run dev


cd frontend
npm install
npm run dev

```

### 4. Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
