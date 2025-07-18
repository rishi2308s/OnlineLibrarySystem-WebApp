# 📚 Online Library System

A responsive web application for managing and browsing a collection of books, built using React, Redux, and Tailwind CSS. Users can view books by category, search by title/author, view detailed information, and add new books dynamically with state management.

## 🚀 Features

- **Home Page** with welcome message and popular books (rating > 3.9)
- **Browse Books** by category with search and filters
- **Book Details** page with description, author, and rating
- **Add Book** form with validation and Redux-powered state management
- **404 Page** for undefined routes
- **Dynamic Routing** for categories and individual books
- Support for book cover image uploads

## 🛠️ Tech Stack

- **React** (with Vite)
- **Redux** for global state
- **Tailwind CSS** (via CDN) — for rapid styling with utility-first classes
- **React Router DOM** for client-side routing
- **UUID** for unique book IDs

## 📂 Project Structure (Simplified)

📁 src
├── 📁 components // Reusable components (Navbar, BookCard, etc.)
├── 📁 pages // Main pages: Home, Browse, Add, BookDetails
├── 📁 redux // Redux store & slices
├── App.jsx // Main app with routing
└── main.jsx // Entry point


## Setup Instructions

> This project uses **Vite** for fast development and **Tailwind CSS CDN** for styling.

1. **Clone the repository**

    ```bash
    git clone https://github.com/rishi2308s/OnlineLibrarySystem-WebApp.git
    cd OnlineLibrarySystem-WebApp

2. **Install Dependencies**

    ```bash
    npm install

3. **Run Development Server**

   ```bash
   npm run dev

4. **Open The App**

Open http://localhost:5173 in your browser.
The app supports hot reloading for a smooth dev experience.


