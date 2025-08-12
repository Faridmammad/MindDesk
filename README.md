# 🧠 MindDesk

**MindDesk** is a full-stack note-taking web application built using the **MERN** stack (MongoDB, Express.js, React, Node.js). Designed for simplicity and speed, MindDesk allows users to create, read, update, and delete notes — all within a modern, responsive UI powered by **Tailwind CSS**.

🔗 **Live Demo**: [minddesk.onrender.com](https://minddesk.onrender.com)

---

## 🚀 Features

- 📝 Create, edit, and delete notes in real time
- 🌐 RESTful API using Express.js
- 💾 MongoDB for storing notes
- 🎨 Beautiful and responsive UI with Tailwind CSS
- 🌍 Environment-based configuration via `.env` files
- 🛡️ Middleware integration and rate limiting for API protection
- 📦 Deployed with Render.com

---

## 💠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Deployment:** [Render.com](https://render.com)

---

## 📂 Project Structure

```
MindDesk/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

---

## 🧪 API Endpoints

**Base URL**: `https://minddesk.onrender.com/api/notes`

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/`              | Get all notes       |
| POST   | `/`              | Create a new note   |
| GET    | `/:id`           | Get a single note   |
| PUT    | `/:id`           | Update a note       |
| DELETE | `/:id`           | Delete a note       |

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

### 🖥️ Installation

Clone the repository:

```bash
git clone https://github.com/Faridmammad/MindDesk.git
cd minddesk
```

#### Backend

```bash
cd backend
npm install
cp .env.example .env  
npm run start
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

- **Render.com** was used to deploy both the frontend and backend.
- MongoDB is hosted on **MongoDB Atlas**.


---

## 🧰 Tools & Concepts Used

- Environment variables with `dotenv`
- API rate limiting middleware
- Express middleware and routing
- Responsive design with Tailwind
- React hooks and components
- Render deployment pipeline


---

## 📄 License

MIT License © 2025 [Farid Mammad]

---

## 🙌 Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Render](https://render.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Express.js](https://expressjs.com/)

---

## 📚 Credits
This project was built by following the excellent MERN Note-Taking App tutorial by Burak Orkmez.
Huge thanks for the guidance and detailed walkthrough!

