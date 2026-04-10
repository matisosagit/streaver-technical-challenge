# Assumptions & Technical Decisions

## 1. Project Architecture
* **Full-Stack Implementation:** I decided to build both a frontend and a custom backend (API routes) to demonstrate my ability to handle a full-stack environment and show how I structure data flow between client and server.

## 2. Technical Stack & Learning
* **New Technologies:** While this was my first experience with **Next.js**, **TypeScript**, and **SWR**, I assumed the goal of the challenge was to evaluate my "learnability" and my capacity to integrate modern industry-standard tools in a short timeframe.

## 3. Connectivity & UX
* **Slow Connection Handling:** I assumed a 3000ms (3 seconds) threshold for the `loadingTimeout`. I decided to use the `onLoadingSlow` event to trigger user-friendly notifications (Toasts) to ensure the user is informed during network latency.

## 4. API Reliability
* **Data Availability:** I assumed the data source is reliable and follows RESTful conventions. I implemented basic error handling to manage potential fetch failures gracefully.