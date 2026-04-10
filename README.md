# Technical Challenge: Posts Management System

This project is a technical assessment developed for **Streaver**. It features a real-time post listing system with filtering capabilities, built with modern web technologies.

## 🚀 Features

* **API Integration:** Fetches and displays data from the required external API.
* **Search & Filter:** Users can filter posts dynamically by **ID** using a search bar.
* **Optimized UX:** * Loading states and "Slow connection" warnings (3s timeout).
    * Real-time toast notifications for errors and connectivity issues.
* **Responsive Design:** Styled with Tailwind CSS for mobile and desktop support.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) for static typing and code reliability.
* **Data Fetching:** [SWR](https://swr.vercel.app/) for caching, revalidation, and loading states.
* **Testing:** [Vitest/Jest](https://vitest.dev/) for unit and component testing.
* **Notifications:** [Sonner](https://sonner.emilkowal.ski/) for high-quality toast alerts.

## 🧠 Development Process & Learning

This challenge was a significant learning experience. It was my **first time** working with **Next.js, TypeScript, and SWR**. 

To overcome the learning curve within the deadline:
1.  **Documentation:** I relied heavily on official documentation to understand the core concepts of each library.
2.  **AI Tools:** I used **GitHub Copilot** and **Google Gemini** as collaborators to assist with syntax and boilerplate. However, I maintained full control over the project's logic and architecture, ensuring every implementation met the requirements and my own technical standards.

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/matisosagit/streaver-technical-challenge.git]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the root and add the required API URL:
    ```env
    NEXT_PUBLIC_API_URL=[https://jsonplaceholder.typicode.com/posts]
    ```
4.  **Run the project:**
    ```bash
    npm run dev
    ```

---
Developed by **Matías Sosa**.