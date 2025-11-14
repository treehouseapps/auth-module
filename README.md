# Auth Module: Login & Register Forms

Reusable React authentication module supporting **separate forms** and a **combined AuthForm** component.

---

## 🔹 Approaches

| Approach              | When to Use                     | Components                          |
| --------------------- | ------------------------------- | ----------------------------------- |
| **Separate Forms**    | Apps with multiple routes       | `<LoginForm />`, `<RegisterForm />` |
| **Combined AuthForm** | Single-page or modal-style auth | `<AuthForm />`                      |

---

## Features

* Callback handling for success/error
* Returns full response: `{ success, data, error }`
* Input validation included
* Email verification with OTP after registration
* Fully reusable

---

## Installation

```bash
npm install treehouse-login
# or
yarn add treehouse-login
```

---

## Usage Examples

### 1️⃣ Separate Forms

```jsx
import { LoginForm, RegisterForm } from 'treehouse-login';

// Login Page
<LoginForm onSubmit={(res) => {
  if(res.success) console.log("Login success:", res.data);
  else console.log("Login error:", res.error);
}} />

// Register Page
<RegisterForm onSubmit={(res) => {
  if(res.success) console.log("Registration success:", res.data);
  else console.log("Registration error:", res.error);
}} />
```

### 2️⃣ Combined AuthForm

```jsx
import { LoginForm, RegisterForm } from 'treehouse-login';

// Login Page
<LoginForm onSubmit={(res) => {
  if(res.success) console.log("Login success:", res.data);
  else console.log("Login error:", res.error);
}} />

// Register Page
<RegisterForm 
  onSubmit={(res) => {
    if(res.success) console.log("Registration success:", res.data);
    else console.log("Registration error:", res.error);
  }}
  senderName="Your Name"
  senderEmail="youremail@example.com"
/>

```

---

## How It Works

* Module handles input and validation
* Calls the developer callback with full response `{ success, data, error }`
* OTP is automatically sent to the user using the senderName and senderEmail you provide

---

## Commands to Test Locally

```bash
npx create-next-app my-auth-test
cd my-auth-test

# Copy components if needed or use package
npm run dev
# or
yarn dev
```

---

## Notes

* Separate Forms → best for route-based apps
* AuthForm → best for single-page/modal UX
* Callback always receives full response for developer handling
* OTP verification is handled automatically and included in the callback

---

## License

MIT