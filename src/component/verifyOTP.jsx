"use client";
import { useState } from "react";
import { verifyOtp } from "../lib/auth/verifyOtp";
import "../public/style.css";

export default function OtpForm({ email, onSubmit }) {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const result = await verifyOtp(email, otp);
            setLoading(false)
            if (onSubmit) onSubmit(result);
        } catch (err) {
            console.log(err)
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Verify Your Email</h2>
                <p className="auth-sub">
                    Enter the OTP sent to <strong>{email}</strong>
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div>
                        <label>OTP</label>
                        <input
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            maxLength={6}
                        />
                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="auth-btn" disabled={loading}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
            </div>
        </div>
    );
}
