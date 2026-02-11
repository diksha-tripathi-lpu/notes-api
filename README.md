# 📘 Notes API – Mini Project (MongoDB + Express)

## 📌 Project Overview

This project is a backend REST API for managing notes, similar to a simplified version of Google Keep.
It allows users to perform CRUD operations (Create, Read, Update, Delete) using **Node.js, Express, and MongoDB**.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (API Testing)

---

## 📂 Project Structure

notes-api/
│
├── models/
│   └── Note.js
│
├── routes/
│   └── notes.js
│
├── server.js
├── package.json
└── .gitignore

---

## 🗂 Note Schema

Each note contains:

* **title** (String, required)
* **content** (String, required)
* **createdAt** (Date, auto-generated)

---

## 🔗 API Endpoints

| Method | Route      | Description       |
| ------ | ---------- | ----------------- |
| POST   | /notes     | Create a new note |
| GET    | /notes     | Get all notes     |
| GET    | /notes/:id | Get note by ID    |
| PUT    | /notes/:id | Update note       |
| DELETE | /notes/:id | Delete note       |

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

git clone <your-repo-link>

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally on port **27017**.

### 4️⃣ Run Server

npm start

Server runs on:
http://localhost:3000

---

## 🧪 Example Request (Postman)

POST → http://localhost:3000/notes

Body (JSON):
{
"title": "My First Note",
"content": "Hello world!"
}

---

## 🧠 Concepts Used

* Express Routing
* Middleware (express.json)
* MongoDB Connection
* Mongoose Schema & Model
* REST API Design
* Async/Await

---

## 🎯 Learning Outcome

Through this project, I learned how to:

* Build REST APIs using Express
* Connect MongoDB with Node.js
* Perform CRUD operations
* Test APIs using Postman

---

## 👩‍💻 Developed By

**Diksha Tripathi**
B.Tech CSE – Lovely Professional University
