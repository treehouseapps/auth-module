"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import { loginUser } from "../lib/auth/login";
import { registerUser } from "../lib/auth/register";
import "../public/style.css";
import OtpForm from "./verifyOTP";

export default function AuthForm({ onSubmit }) {
    const [step, setStep] = useState("register");
    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (step === "register") {
            setLoading(false);
        }
    }, [step]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (mode === "login") {
            const result = await loginUser(email, password);
            if (onSubmit) onSubmit(result);
        } else {
            const result = await registerUser(name, email, password);
            if (result?.success) {
                const now = new Date();
                const futureTime = new Date(now.getTime() + 5 * 60 * 1000);

                emailjs
                    .send(
                        "service_hwxf2z8",
                        "template_ih0ilv9",
                        {
                            email: email,
                            passcode: result.data.data.otp,
                            time: futureTime.toLocaleString(),
                            senderName: senderName || 'Treehouse',
                            senderEmail: senderEmail || 'bbekijunior@gmail.com'
                        },
                        "27Rl0xvyqXbmc5Tnv"
                    )
                    .then(
                        () => {
                            alert("✅ OTP sent successfully!")
                            setStep("otp");
                        },
                        (error) => {
                            console.error("EmailJS error:", error);
                            alert("❌ Failed to send OTP. Check console.");
                        }
                    );

            }
        }
    }

    if (step === "otp") {
        return <OtpForm email={email} onSubmit={onSubmit} />;
    }

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

                    <button type="submit" className="auth-btn" disabled={mode === "register" && loading}>
                        {mode === "login" ? "Login" : loading ? "Sending..." : "Register"}
                    </button>

                </form>

                <p className="auth-switch">
                    {mode === "login" ? (
                        <>
                            Don’t have an account?{" "}
                            <button type="button" onClick={() => setMode("register")}>Register</button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button type="button" onClick={() => setMode("login")}>Login</button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
