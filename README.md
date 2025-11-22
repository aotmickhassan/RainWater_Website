# 🌍 Rainwater Convention Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

> **A fully functional 4-page website for the Rainwater Convention, designed to promote rainwater harvesting, sustainable water management, and participant registration.**

---

## 📋 Table of Contents



- [Live Preview](#-live-preview)

- [Project Overview](#-project-overview)

- [Features](#-features)

- [Technologies & Stack](#-technologies--stack)

- [Deployment Guide](#-deployment-guide)

- [UI/UX Design Prototype](#-uiux-design-prototype)

- [GitHub Repository](#-github-repository)

- [Installation & Setup](#-installation--setup)

- [Running Locally](#-running-locally)

- [Website Pages](#-website-pages)

- [CRUD Operations](#-crud-operations)

- [Form Validation](#-form-validation)

- [Deployment Instructions](#-deployment-instructions)

- [Team & Contact](#-team--contact)


---

## 🚀 Live Preview

| Environment | URL | Status |
| :--- | :--- | :--- |
| **🌐 Deployed Site** | [**rainwaterconvention.netlify.app**](https://rainwaterconvention.netlify.app/) | 🟢 Live |
| **💻 Local Dev** | `http://localhost:5173` | 🟡 Local |




**Direct Page Links:**
* 💧 [Rainwater Convention (Landing)](https://rainwaterconvention.netlify.app/)
* 🏠 [Home](https://rainwaterconvention.netlify.app/home)
* ❓ [FAQs](https://rainwaterconvention.netlify.app/faqs)
* 📝 [Registration](https://rainwaterconvention.netlify.app/registration)
* 👨‍💼 [Admin Portal](https://rainwaterconvention.netlify.app/admin)

---

## 📖 Project Overview

The **Rainwater Convention Website** is a responsive, modern web application built with **React.js** and **Vite**. It acts as a central hub for the convention, allowing users to learn about water conservation and register for the event, while administrators can manage the guest list.

**Key Objectives Met:**
* ✅ Developed a full 4-page Single Page Application (SPA).
* ✅ Implemented **Local Server Deployment**.
* ✅ Integrated **Form Validation** (Regex & Required fields).
* ✅ Created a **CRUD System** using LocalStorage.
* ✅ Styled with **Bootstrap 5** for full responsiveness.

---

## ✨ Features & Pages

### 🏠 Home Page
* Hero section with compelling messaging.
* Educational content on water conservation and hygiene.
* Clear Call-to-Action (CTA) buttons.

### ❓ FAQs Page
* Accordion-style or list-format Q&A.
* Information regarding event location, fees, and eligibility.

### 📝 Registration Page
* User-friendly sign-up form.
* **Real-time Validation:** Visual feedback for valid/invalid inputs.
* **Data Persistence:** Saves entries directly to the browser.

### 👨‍💼 Admin Portal
* **Dashboard View:** See all registered attendees.
* **Management Actions:**
    * ✏️ **Edit:** Update typo-ridden names or emails.
    * 🗑️ **Remove:** Delete participants who cancel.
    * ➕ **Add:** Manually register users.

### 🎨 Additional Features
- Responsive Bootstrap design
- Navigation bar with active page highlighting
- Mobile-friendly interface
- Professional color scheme (Blue theme)

---

## 🛠️ Technologies & Stack

### **Frontend Framework**
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | 18.x | UI library for building components |
| **Vite** | 5.x | Ultra-fast build tool and HMR |
| **React Router** | 6.x | Client-side navigation |
| **Bootstrap** | 5.3.x | Responsive styling framework |

### **State & Storage**
* **localStorage:** Used as a lightweight frontend database.
* **React Hooks:** `useState`, `useEffect` for logic.

### **Dev Tools**
* **Node.js & npm:** Runtime and package manager.
* **Git:** Version control.
* **Netlify:** Cloud hosting platform.



---

## 🚀 Deployment Guide

### **Step 1: Prerequisites**

Ensure you have the following installed:
- **Node.js** (v16 or higher): [Download](https://nodejs.org)
- **npm** (comes with Node.js)
- **Git** (for version control): [Download](https://git-scm.com)



### **Step 2: Clone or Download Project**

#### Option A: Using Git
- git clone https://github.com/aotmickhassan/RainWater_Website.git
- cd rainwater-convention

#### Option B: Download ZIP
1. Download the project folder
2. Extract the ZIP file
3. Navigate to the folder in terminal


### **Step 3: Install Dependencies**

npm install



This installs all required packages listed in `package.json`:
- React, Vite, React Router, Bootstrap, etc.


### **Step 4: Development Server (Local Preview)**

npm run dev



➜ Local: http://localhost:5173/
➜ press h to show help


**Open your browser and visit:** `http://localhost:5173/`

The development server includes:
- ✅ Hot Module Replacement (HMR) - auto-reload on file changes
- ✅ Fast refresh
- ✅ Development-friendly error messages

-

### **Step 5: Building for Production**

When ready to deploy or share:

npm run build


This creates an optimized production build in the `dist/` folder:
- Minified JavaScript
- Optimized CSS
- Bundled assets



### **Step 6: Serve Production Build Locally**

To test the production build locally:

- npm install -g serve
- serve -s dist


Visit: `http://localhost:3000/` (or provided URL)

---

## 🎨 UI/UX Design Prototype

A professional UI/UX design prototype has been created to showcase the website's visual design and layout.

### **Canva Prototype Link**


### **Prototype Includes:**
- ✅ Desktop mockups for all 4 pages
- ✅ Color scheme and typography
- ✅ Component design (buttons, forms, tables)
- ✅ Responsive layout specifications
- ✅ Interaction patterns

### **Design Specifications**
| Aspect | Details |
|---|---|
| **Color Palette** | Primary Blue (#0066CC), Dark Gray (#333333), Light Gray (#f5f5f5) |
| **Typography** | Canva Sans / Bootstrap Font Stack |
| **Layout** | Bootstrap Grid System (12 columns) |
| **Breakpoints** | Mobile, Tablet, Desktop |

---

## 🐙 GitHub Repository

All project files are organized and documented in GitHub.

### **Repository Link**
https://github.com/aotmickhassan/RainWater_Website




### **How to Use the Repository:**

1. **Clone the repository:**
   https://github.com/aotmickhassan/RainWater_Website.git

2. **Create a branch for your changes:**
   git checkout -b feature/your-feature-name

3. **Make your changes and commit:**
   git add .
   git commit -m "Add feature: your feature description"

4. **Push to GitHub:**
   git push origin feature/your-feature-name


---

## 💻 Installation & Setup

### **Full Setup from Scratch**

1. Navigate to your desired folder
   `cd /path/to/your/workspace`

2. Create a new Vite React project
   `npm create vite@latest rainwater-convention -- --template react`

3. Navigate to project
   `cd rainwater-convention`

4. Install dependencies
   `npm install`
5. Install additional packages
   `npm install react-router-dom bootstrap`

6. Start development server
   `npm run dev`


### **Project Setup Time**
- ⏱️ Estimated: 5-6 minutes
- 📦 Download size: ~100-150 MB (node_modules)

---

## 🏃 Running Locally

### **Quick Start**

Install dependencies (one-time)
`npm install`

Start development server
`npm run dev`

Then open: `http://localhost:5173/`

### **Access Different Pages**

| Page | URL |
|---|---|
| Home | http://localhost:5173/ |
| FAQs | http://localhost:5173/faqs |
| Registration | http://localhost:5173/registration |
| Admin | http://localhost:5173/admin |

### **Testing the Website**

1. **Home Page:** View the landing page and information
2. **FAQs Page:** Read frequently asked questions
3. **Registration Page:**
    - Fill in the form (test validation)
    - Try invalid email (see error messages)
    - Submit valid form (see success message)
4. **Admin Page:**
    - View registered participants
    - Click "Edit" to modify information
    - Click "Remove" to delete a participant

---


## 📄 Website Pages

### **Page 1: Home**
- Welcome message
- Information about water conservation
- Call-to-action buttons
- Responsive design

### **Page 2: FAQs**
- Common questions answered
- Easy navigation
- Link to registration

### **Page 3: Registration**
- Participant sign-up form
- Name field (required)
- Email field (required, with format validation)
- Submit button
- Success/error messages

### **Page 4: Admin**
- Participant management dashboard
- View all registered participants
- Edit participant information
- Delete participants
- Responsive table layout

---

## 🔄 CRUD Operations

The Admin portal supports full CRUD (Create, Read, Update, Delete) operations:

### **Create (Registration Form)**
- User fills form and clicks "Register"
- Data saved to localStorage
`addParticipant({ name: "John Doe", email: "john@example.com" })`


### **Read (Admin Page)**
- Display all participants in a table
`const participants = getParticipants()`

### **Update (Edit Button)**
- Click "Edit" → modify fields → click "Save"
`updateParticipant(index, { name: "Jane Doe", email: "jane@example.com" })`



### **Delete (Remove Button)**
- Click "Remove" → participant deleted
`removeParticipant(index)`


---

## ✔️ Form Validation

### **Registration Form Validation**

**Field: Name**
- ✅ Required (cannot be empty)
- ✅ Shows error if left blank
- ✅ Turns green when valid

**Field: Email**
- ✅ Required (cannot be empty)
- ✅ Must include "@" symbol
- ✅ Specific error: "Email must include '@' symbol."
- ✅ Must follow format: `user@domain.com`
- ✅ Specific error: "Email format is invalid. Example: user@email.com"
- ✅ Errors shown in separate divs below input

**Submit Button**
- ✅ Only works when all fields are valid
- ✅ Shows success message on valid submission
- ✅ Clears form after successful submission

**Error Display**
- ✅ Real-time validation (errors show as you type)
- ✅ Bootstrap styling (is-invalid, is-valid classes)
- ✅ Clear error messages for each field

---

## 🚢 Deployment Instructions

### **For Netlify (Recommended)**

1. **Push to GitHub:**
   - git add .
   - git commit -m "Initial commit"
   - git push origin main

text

2. **Go to Netlify:** https://app.netlify.com

3. **New site from Git:**
- Click `New site from Git`
