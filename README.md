# 🤖 GenAI Chatbot (Node.js + React)

A simple and clean AI chatbot UI built using React.js and a backend AI API. Fully responsive, fast, and easy to customize.

---

## 📌 Overview

This project provides a minimal chatbot interface where users can type messages, send them to a backend `/ask` endpoint, and receive AI-generated responses. The UI includes a sidebar, chat window, and input bar designed with clean styling.

---

## 🚀 Features

- 🗨️ Real-time chat interface  
- 📱 Responsive UI design  
- 🔗 Easy API integration  
- 📂 Organized folder structure  
- ⚛️ Built using reusable React components  
- ⚡ Fast development and easy customization  

---

## 🧠 Concepts Used

- React components & props  
- Hooks (`useState`, `useEffect`)  
- REST API integration using Fetch or Axios  
- CSS styling  
- Component-based architecture  
- Page structure & UI separation  

## Tech Stack
- **Frontend:** React  
- **Backend:** Node.js + Express  
- **AI Engine:** OpenAI API  
- **Styling:** CSS  
- **Runtime:** Browser + Node.js  

## Installation
**Frontend:**  
```bash
npm install
npm start
````

**Backend:**

```bash
npm install
npm run dev
```

**Environment:**

* Add API keys in a `.env` file for the AI services you are using

## How It Works

1. User enters a message in the chat UI.
2. Message is sent to the Node.js backend via API.
3. Backend forwards the message to an LLM or Python AI service.
4. Response is returned and displayed in the chat window.

