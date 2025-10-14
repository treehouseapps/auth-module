# README.md

# Auth Module: Login & Register Forms

A reusable React authentication module supporting **both separate forms** and a **combined AuthPortal**.
Flexible design lets developers choose the approach that fits their app.

---

## 🔹 Two Approaches

| Approach                | When to Use                                            | Components                           | Example                                                        |
| ----------------------- | ------------------------------------------------------ | ------------------------------------ | -------------------------------------------------------------- |
| **Separate Forms**      | Recommended for apps with multiple routes (App Router) | `<LoginForm />` & `<RegisterForm />` | `/login` → `<LoginForm />`, `/register` → `<RegisterForm />`   |
| **Combined AuthPortal** | Single-page apps or modal-style authentication         | `<AuthPortal />`                     | `<AuthPortal />` toggles login ↔ register inside one component |

---

## Features

* Supports **callback handling** for success/error
* Sends **full response object** `{ success, data, error }` to developer
* Validation included (required fields, email format)
* Works with **custom CSS**, no Tailwind required
* Fully reusable and scalable

---

## Installation

```bash
npm install your-module-name
# or
yarn add your-module-name
```

---

## Usage Examples

### 1️⃣ Separate Forms (Recommended for App Router)

**Login Page (`/login`)**

```jsx
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const handleLogin = (res) => {
    if(res.success) {
      alert("Login success: " + res.data.email);
    } else {
      alert("Login failed: " + res.error);
    }
  };

  return <LoginForm onSubmit={handleLogin} />;
}
```

**Register Page (`/register`)**

```jsx
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  const handleRegister = (res) => {
    if(res.success) {
      alert("Registered: " + res.data.email);
    } else {
      alert("Registration failed: " + res.error);
    }
  };

  return <RegisterForm onSubmit={handleRegister} />;
}
```

✅ **Key point:** Each form lives on its own route. Ideal for apps using an App Router with dedicated pages.

---

### 2️⃣ Combined AuthPortal (Single Component)

```jsx
import { AuthPortal } from "./AuthPortal";

export default function AuthPage() {
  const handleResult = (res) => {
    if(res.success) {
      alert("Success: " + JSON.stringify(res.data));
    } else {
      alert("Error: " + res.error);
    }
  };

  return <AuthPortal onResult={handleResult} />;
}
```

**AuthPortal Features**

* Combines login and register into **one component**
* Toggle animations between login ↔ register
* Uses existing `loginUser` and `registerUser` functions
* Ideal for **modal-style or single-page authentication**
* Sends full response to the developer for custom handling

---

## How It Works

1. **User interacts with the form** (login, register, or AuthPortal toggle)
2. **Module validates inputs and runs logic**
3. **Callback function receives full result**:

```js
{
  success: true | false,
  data: {...},      // if success
  error: "..."      // if failure
}
```

4. **Developer decides** what to do with the result (alerts, redirects, saving tokens, etc.)

---

## Commands to Test Locally

```bash
npx create-next-app my-auth-test
cd my-auth-test

# Copy LoginForm.jsx, RegisterForm.jsx, AuthPortal.jsx into your project

npm run dev
# or
yarn dev
```

---

## Notes

* **Separate Forms** → best for route-based apps
* **AuthPortal** → best for single-page or modal-style UX
* Full response is always sent to the developer; the module **never decides how to handle success or error messages**
* Can be extended easily for API integration or additional validations

---

## License

MIT
