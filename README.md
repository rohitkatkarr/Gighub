# **GIGHUB - Job Portal**  
🚀 **A Full-Stack MERN Job Portal for Candidates, Employers, and Admins**  

## **📌 Overview**
**GIGHUB** is a **job portal** that connects **job seekers** with **employers** and provides an **admin dashboard** to manage users and job postings.  

## **🔥 Features**
### ✅ Candidate Features:
- User authentication (signup/login/logout)
- Profile management (resume, skills, experience)
- Job search and filtering
- Apply for jobs
- Save jobs for later  

### ✅ Employer Features:
- Employer registration and authentication
- Post and manage job listings
- View and manage candidate applications
- Contact potential candidates  

### ✅ Admin Features:
- Manage users and jobs
- Moderate job postings
- Handle user reports and disputes  

---

## **🛠️ Tech Stack**
| Component    | Technology |
|-------------|-------------|
| **Frontend**  | React.js, Vite, Tailwind CSS |
| **Backend**   | Node.js, Express.js |
| **Database**  | MongoDB (Mongoose ORM) |
| **Authentication** | JWT (JSON Web Token) |
| **Hosting**   | Frontend (Vercel/Netlify), Backend (Render/Heroku) |

---

## **🎯 API Endpoints**
### 🔐 Authentication
- `POST /api/auth/register` – Register a new user (Candidate, Employer, Admin)
- `POST /api/auth/login` – Login user

### 📌 Jobs
- `GET /api/jobs` – Fetch all job listings
- `POST /api/jobs` – Create a job (Employer only)
- `GET /api/jobs/:id` – Fetch a single job by ID

### 📩 Applications
- `POST /api/applications` – Apply for a job (Candidate)
- `GET /api/applications/:jobId` – Get applications for a job (Employer only)

---

## **⚡ Installation & Setup**
### **1️⃣ Clone the repository**
```bash
git clone <repository-url>
cd gighub
```
### **2️⃣ Install dependencies**
```bash
npm install
```
### **3️⃣ Set up environment variables**
Create a `.env` file and add:
```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```
### **4️⃣ Run the project**
```bash
npm start
```

---

## **🚀 Deployment**
- **Frontend:** Vercel / Netlify  
- **Backend:** Render / Heroku  

---

## **📌 Future Enhancements**
🔹 AI-powered job recommendations  
🔹 Resume parsing and optimization  
🔹 Employer analytics dashboard  

---

## **📜 License**
This project is licensed under the **MIT License**.  

---

### **Made with ❤️ by Rohit Katkar 🚀**