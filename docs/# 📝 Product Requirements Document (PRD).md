# 📝 Product Requirements Document (PRD)

## 📌 Project Title: Resume Tailor – AI-Powered Web App

---

## 1. 🧠 Project Overview

**Resume Tailor** is an AI-powered web app designed to help job seekers tailor their resumes to specific job descriptions using automated AI logic via **n8n**. Users can log in via **magic link (Supabase Auth)**, input their resume and a job posting, and receive a customized version of their resume optimized for that job. Tailored resumes are saved in **Supabase**, and full data is stored in **MongoDB**.

---

## 2. 🎯 Goals

- Increase job seekers' chances of getting interviews by aligning resumes with job descriptions.
- Simplify and automate the tailoring process using AI agents (via n8n).
- Offer a user-friendly interface for uploading, tailoring, and saving resumes.

---

## 3. 👥 Target Users

- Fresh graduates entering the job market
- Professionals seeking better job opportunities
- Freelancers tailoring resumes per project
- Career coaches helping clients optimize resumes

---

## 4. 💡 Core Features

| Feature                 | Description                                                                 
|-------------------------|-----------------------------------------------------------------------------|
| 🔐 Magic Link Auth       | Email-based login using Supabase Auth                                       
| 📄 Resume Upload/Input   | Upload resume (PDF) or paste resume text                                    
| 📑 Job Description Input | Upload/paste job description text                                           
| 🤖 AI Tailoring Logic    | Uses n8n workflows to generate a job-specific tailored resume                
| 🌐 Urdu Translation      | Optionally translates resume/job description to Urdu (using JS dictionary)   
| 💾 Save Resume           | Tailored resume saved to Supabase; full data stored in MongoDB              
| 👁️ Preview & Download    | User can preview and download the AI-generated resume                       

---

## 5. ⚙️ Tech Stack

| Layer      | Tech Used            |
|------------|----------------------|
| Frontend   | Next.js 15 (App Router), Tailwind, ShadCN UI 
| Backend    | API Routes (Node.js) 
| Auth       | Supabase Magic Link Auth 
| Database   | Supabase (structured data), MongoDB (resume text blobs) 
| AI Logic   | n8n agent-based workflows 
| Hosting    | Vercel (CI/CD + Deployment) 

---

## 6. 🔁 User Flow

1. User lands on the homepage and signs in via email (Supabase magic link)
2. Uploads or pastes their resume
3. Uploads or pastes a job description
4. Clicks “Tailor My Resume”
5. n8n logic runs in the background to modify resume based on job description
6. Tailored resume is shown in preview
7. User can download or save the tailored version
8. Resume + logs stored in MongoDB and Supabase

---

## 7. 📅 Milestones

| Milestone               | Date | Folder                 |
|-------------------------|------|------------------------|
| PRD + Wireframes        | Day 15 | `/grand-project/docs/` |
| Backend & DB setup      | Day 18 | `/grand-project/api/`  |
| Frontend UI             | Day 21 | `/grand-project/app/`  |
| AI logic + testing      | Day 24 | `/grand-project/ai/`   |
| Public Demo Live        | Day 27 | —                      |
| Final Docs + Loom Video | Day 29 | `README.md`            |

---

## 8. 📐 Wireframe Screens

- **Login Page** → Magic link input
- **Dashboard** → “Start Resume Tailoring” CTA
- **Resume Tailor Page** → Upload resume + job description
- **Preview Page** → Show tailored resume + buttons to download/save
- **History Page (optional)** → List of tailored resumes with timestamp

(Wireframes are saved in the same `/docs/` folder And Here is the link for screens https://www.figma.com/proto/9rK7IJShSu5qnhNLDYV2Hn/Resume-Tailor-Wireframes?t=X9P1D3xvZpUiRwEF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2)


---

## ✅ Success Criteria

- Resume tailoring works correctly and enhances match with job descriptions.
- At least 1 working n8n AI logic integrated.
- Resume preview + save/download functionality.
- App deployed successfully to Vercel.
- Clean UI with good UX and basic form validation.
- CI/CD pipeline triggers on GitHub push.

---

