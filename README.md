# Auth Module with Login & Register Forms

A reusable authentication module for React apps, supporting both **separate forms** and a **combined AuthPortal**.

This module is flexible:

- Use **separate LoginForm & RegisterForm** on different routes (recommended for apps with App Router).  
- Use **AuthForm** to combine login & register into one modern component with toggle animations.

---

## Features

- Separate `LoginForm` & `RegisterForm` components
- Optional combined `AuthForm` component
- Uses your existing `loginUser` and `registerUser` functions
- Supports callbacks for handling success/error
- Pure custom CSS (no Tailwind required)
- Fully reusable and scalable

---

## Installation

```bash
# Using npm
npm install treehouse-login

# Using yarn
yarn add treehouse-login
