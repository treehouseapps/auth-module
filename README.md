# README.md

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
* Pure custom CSS, no Tailwind
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
  if(res.success) alert("Login: " + res.data.email);
  else alert("Error: " + res.error);
}} />

// Register Page
<RegisterForm onSubmit={(res) => {
  if(res.success) alert("Registered: " + res.data.email);
  else alert("Error: " + res.error);
}} />
```

### 2️⃣ Combined AuthForm

```jsx
import { AuthForm } from 'treehouse-login';

<AuthForm onResult={(res) => {
  if(res.success) alert("Success: " + JSON.stringify(res.data));
  else alert("Error: " + res.error);
}} />
```

---

## How It Works

* Module handles input and validation
* Calls the developer callback with full response `{ success, data, error }`
* Developer decides UI and post-processing

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

---

## License

MIT
