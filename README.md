# 🌍 Rainwater Convention Website

> A fully functional 4-page website for the Rainwater Convention, designed to promote rainwater harvesting and sustainable water management.

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

**Access the live website here:**

### Local Development Server
http://localhost:5173

text

### Deployed Preview (Netlify - Coming Soon)
https://rainwater-convention.netlify.app

text

**Pages:**
- 🏠 **Home:** http://localhost:5173/
- ❓ **FAQs:** http://localhost:5173/faqs
- 📝 **Registration:** http://localhost:5173/registration
- 👨‍💼 **Admin Portal:** http://localhost:5173/admin

---

## 📖 Project Overview

The **Rainwater Convention Website** is a responsive, modern web application built with React.js and Vite. It serves as a platform for:

✅ Promoting rainwater harvesting and water conservation  
✅ Providing information through FAQs  
✅ Registering participants for the convention  
✅ Managing registered participants (Admin Portal)

**Objective:** Design, develop, and deploy a fully functional 4-page website for the Rainwater Convention with local server deployment.

**Key Requirements Met:**
- ✅ 4-page website (Home, FAQs, Registration, Admin)
- ✅ Local server deployment
- ✅ Form validation (required fields, email format)
- ✅ Navigation menu linking all pages
- ✅ Participant management (CRUD operations)
- ✅ Bootstrap styling for responsive design

---

## ✨ Features

### 🏠 Home Page
- Hero section with compelling messaging
- Information about water conservation and hygiene
- Quick navigation to other pages
- Call-to-action buttons

### ❓ FAQs Page
- Frequently asked questions about the convention
- Easy-to-read Q&A format
- Quick links to registration

### 📝 Registration Page
- Participant sign-up form
- **Form Validation:**
    - Required field validation (Name, Email)
    - Email format validation with specific error messages
    - Real-time error feedback
    - Success message on submission
- Data stored in localStorage (frontend database)

### 👨‍💼 Admin Portal
- View all registered participants in a table
- **CRUD Operations:**
    - ✅ **Create**: Add new participants (via registration form)
    - ✅ **Read**: View all participants in table format
    - ✅ **Update**: Edit participant information inline
    - ✅ **Delete**: Remove participants from the list
- Data persists using browser localStorage

### 🎨 Additional Features
- Responsive Bootstrap design
- Navigation bar with active page highlighting
- Mobile-friendly interface
- Professional color scheme (Blue theme)

---

## 🛠️ Technologies & Stack

### **Frontend Framework**
| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.x | UI library for building components |
| **Vite** | 5.x | Ultra-fast build tool and dev server |
| **React Router DOM** | 6.x | Client-side routing for navigation |
| **Bootstrap** | 5.3.8 | CSS framework for styling |

### **State Management & Storage**
| Technology | Purpose |
|---|---|
| **localStorage** | Frontend database for participant data |
| **React Hooks** | useState, useEffect for state management |

### **Styling**
| Technology | Purpose |
|---|---|
| **Bootstrap Classes** | Responsive grid, forms, buttons |
| **CSS** | Custom styling and layout |

### **Development Tools**
| Tool                 | Purpose |
|----------------------|---|
| **npm**              | Package manager |
| **Node.js**          | JavaScript runtime |
| **WebStorm/VS Code** | Code editor |
| **Git**              | Version control |

### **Deployment**
| Platform | Purpose |
|---|---|
| **Netlify** | Hosting and CI/CD (Optional) |
| **Vercel** | Hosting and deployment (Alternative) |

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
(To be added: Share your Figma link here)
https://www.figma.com/design/YOUR_PROJECT_ID/rainwater-convention


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