"use client";
import { loginUser } from '../lib/auth/login';

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const result = loginUser(email, password);

        if (result.success) {
            console.log('Success:', result.data);
        } else {
            console.log('Error:', result.error);
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-md p-8 bg-gray-900 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>

                <form className="space-y-5" onSubmit={onSubmit} >
                    <div>
                        <label className="block text-gray-400 mb-1">Username or Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your username or email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>


                    <div className="relative">
                        <label className="block text-gray-400 mb-1">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <label className="flex items-center space-x-2 text-gray-400 text-sm">
                        <input type="checkbox" className="w-4 h-4 text-purple-500 rounded" />
                        <span>Remember me</span>
                    </label>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-400 text-sm mt-2">
                        <a href="/register" className="text-purple-400 hover:underline">
                            Register
                        </a>
                    </p>
                    <p className="text-center text-gray-400 text-sm mt-2">
                        <a href="#" className="text-purple-400 hover:underline">
                            Forgot password?
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
