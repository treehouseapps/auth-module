"use client";
import { useState } from "react";
import { loginUser } from "../lib/auth/login";
import { registerUser } from "../lib/auth/register";
import "../public/style.css";

export default function AuthForm({ onSubmit }) {
    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const result =
            mode === "login"
                ? loginUser(email, password)
                : registerUser(name, email, password);

        if (onSubmit) onSubmit(result)
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">
                    {mode === "login" ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="auth-sub">
                    {mode === "login"
                        ? "Please sign in to continue"
                        : "Fill the form to register"}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {mode === "register" && (
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}

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
                        {mode === "login" ? "Login" : "Register"}
                    </button>
                </form>

                <p className="auth-switch">
                    {mode === "login" ? (
                        <>
                            Don’t have an account?{" "}
                            <button onClick={() => setMode("register")}>Register</button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button onClick={() => setMode("login")}>Login</button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
