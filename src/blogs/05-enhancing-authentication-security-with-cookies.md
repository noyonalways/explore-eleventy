---
title: Enhancing Authentication Security with Cookies in Next.js and Express.js
description: Custom authentication using Express.js for the backend and Next.js for the frontend. Initially, I stored authentication tokens in both `localStorage` and cookies. However, I realized this approach had security limitations.
tags: ["Next.js", "Express.js", "JavaScript"]
author: Noyon Rahman
date: 2025-04-08
---

![Authentication Security Banner](https://res.cloudinary.com/ddlks1eka/image/upload/v1742059263/x2tagcdxwj92lupphsbd.png)

# Enhancing Authentication Security with Cookies in Next.js and Express.js

I recently worked on a project where I implemented custom authentication using **Express.js** for the backend and **Next.js** for the frontend. Initially, I stored authentication tokens in both `localStorage` and cookies. However, I realized this approach had security limitations:

> ⚠️ **localStorage is vulnerable to XSS attacks**, and token management can be inconsistent.

---

## 🔒 Transition to Cookie-Based Authentication

To improve security and streamline authentication, I transitioned to a **fully cookie-based authentication system**. Here’s what I learned and how I implemented it:

---

## 🛡️ Next.js Middleware for Route Protection & Role-Based Access

- Middleware intercepts requests and **extracts authentication data from the cookie**.
- Ensures protected routes are only accessible to **authenticated users**.
- **Role-based access control** is dynamically enforced based on user roles.

---

## 🔁 Axios Instance for Secure API Calls

- A custom Axios instance automatically includes the **authentication cookie** in every request.
- This eliminates the need to manually attach tokens, ensuring **seamless authentication**.

---

## 🔐 Secure Token Storage & Logout

- After login, the backend issues an **HTTP-only, secure cookie** to store the authentication token.
- On logout, a dedicated API **clears the cookie**, ensuring a proper session termination.

---

## ✅ Why Choose Cookie-Based Authentication?

- **Better Security** – Protects against **XSS & CSRF** attacks with HTTP-only and SameSite cookies.
- **Automatic Token Handling** – No need to manually send tokens in API requests.
- **Seamless Route Protection** – Middleware efficiently manages access control.
- **Cleaner Logout Process** – Server-side cookie management ensures proper session clearing.

---

## 🚀 Final Thoughts

This approach has significantly improved both **security** and **maintainability** in my authentication workflow.

---

💬 **How do you handle authentication in your projects? I'd love to hear your approach!**
