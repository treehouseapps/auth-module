"use client";
import { useState } from "react";
import { loginUser } from "../lib/auth/login";
import "../public/style.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = loginUser(email, password);
        if (result.success) {
            console.log('Success:', result.data);
        } else {
            console.log('Error:', result.error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-sub">Please sign in to continue</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Login
                    </button>
                </form>

                <p className="auth-switch">
                    Don’t have an account?{" "}
                    <a href="/register">
                        <button>Register</button>
                    </a>
                </p>
            </div>
        </div>
    );
}
