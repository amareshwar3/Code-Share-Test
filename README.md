# Code-Share-Test Live

An interactive **online coding platform** that lets users **write, execute, and share HTML, CSS, and JavaScript code** in real-time with **instant live preview**, custom test validation, and **multi-user collaboration**.

---

## 🚀 Features

- 🧠 **Live Code Editor:**  
  Built with React and CodeMirror to edit HTML, CSS, and JS with syntax highlighting and auto-sync.

- 🪞 **Instant Preview:**  
  Iframe-based live rendering of code output (HTML/CSS/JS) within milliseconds.

- 🧩 **Custom Test Engine:**  
  Validates user-submitted code using:
  - **Cheerio** for HTML DOM queries  
  - **JSDOM** for CSS and DOM simulation  
  - **JavaScript** runtime for logic validation  

- ⚙️ **Judge0 API Integration:**  
  Executes code in multiple languages via secure sandboxing.

- 🌐 **Real-Time Collaboration:**  
  Using **Socket.IO**, users can:
  - Collaborate on the same editor  
  - Share messages and chat  
  - Exchange PDFs or files live  

- 🧾 **User Authentication & Management:**  
  Session-based login for secure collaboration and API access.

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, CodeMirror, Iframe Rendering |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Code Execution** | Judge0 API |
| **HTML/CSS Parsing** | Cheerio, JSDOM |
| **Real-time Communication** | Socket.IO |
| **Auth & Security** | Express-Session, Bcrypt |
| **Utilities** | UUID v4, Nodemailer |
| **Version Control & Deployment** | Git, GitHub, Vercel / Render |

---

## 🏗️ System Architecture

                    ┌──────────────────────────┐
                    │        FRONTEND          │
                    │  (React + CodeMirror)    │
                    └────────────┬─────────────┘
                                 │
                         User Actions (typing)
                                 │
                                 ▼
                     ┌──────────────────────────┐
                     │        APP STATE         │
                     │ useState / useEffect     │
                     └────────────┬─────────────┘
                                 │
                                 ▼
                     ┌──────────────────────────┐
                     │      IFRAME PREVIEW      │
                     │  Renders HTML/CSS/JS     │
                     └────────────┬─────────────┘
                                 │
                                 ▼
                     ┌──────────────────────────┐
                     │        BACKEND (API)     │
                     │ Node.js + Express.js     │
                     └────────────┬─────────────┘
                                 │
                   ┌─────────────┼──────────────┐
                   ▼             ▼              ▼
       ┌────────────────┐   ┌──────────────┐   ┌───────────────────┐
       │  MongoDB (DB)  │   │  Judge0 API  │   │  Socket.IO Server  │
       │  Store tests   │   │  Code exec.  │   │  Real-time sync    │
       └────────────────┘   └──────────────┘   └───────────────────┘

---

## ⚙️ Setup & Installation

### 1. **Clone the Repository**
```bash
git clone https://github.com/<your-username>/Code-Share-Test.git
cd Code-Share-Test
````

### 2. **Install Dependencies**

```bash
npm install
cd client && npm install
```

### 3. **Set up Environment Variables**

Create a `.env` file in the **root directory**:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JUDGE0_API_URL=https://api.judge0.com
```

### 4. **Run the App**

```bash
npm run dev
```

The **frontend** runs at 👉 [http://localhost:3000](http://localhost:3000)
The **backend** runs at 👉 [http://localhost:5000](http://localhost:5000)

---

## 🧮 How It Works (Flow Summary)

1. **User writes code** → React stores it using `useState`.
2. **Live preview** updates instantly inside an iframe (`srcDoc`).
3. **Custom test engine** checks:

   * 🧩 HTML via **Cheerio**
   * 🎨 CSS via **JSDOM**
   * ⚙️ JavaScript via **runtime function execution**
4. **Judge0 API** handles **multi-language code execution**.
5. **Socket.IO** ensures:

   * 🔁 Code sync between users
   * 💬 Real-time chat + 📄 PDF/file exchange (via base64 encoding)
6. **MongoDB** stores:

   * Test cases
   * Sessions
   * User data

---

## 🔒 Authentication

Supports two authentication modes:

* **Session-based Auth** (via `express-session`) — maintains login state on the server.

**Security Stack:**

* 🔑 `bcrypt` — password hashing
* 🪪 `uuid v4` — generates unique user/session IDs

---

## 🧰 Tech Stack

**Frontend:** React, Socket.IO Client, Axios
**Backend:** Node.js, Express, MongoDB, Socket.IO
**Code Execution:** Judge0 API
**Auth & Security:** bcrypt, uuid, express-session
**Testing/Parsing:** Cheerio, JSDOM

---

## 🚀 Features

✅ Real-time code collaboration
✅ Live preview (HTML/CSS/JS)
✅ Multi-language execution (via Judge0)
✅ Real-time chat + file sharing
✅ MongoDB persistence

---
