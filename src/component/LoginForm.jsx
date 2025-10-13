"use client";
import { loginUser } from "../lib/auth/login";
import { useState } from "react";
import "../public/style.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) => {
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
            <div className="auth-box">
                <h1 className="auth-title">Login</h1>

                <form className="auth-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Username or Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your username or email"
                            required
                        />
                    </div>

                    <div className="form-group password-group">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="toggle-password"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <label className="remember-me">
                        <input type="checkbox" /> Remember me
                    </label>

                    <button type="submit" className="auth-button">
                        Login
                    </button>

                    <p className="auth-links">
                        <a href="/register">Register</a> | <a href="#">Forgot password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
