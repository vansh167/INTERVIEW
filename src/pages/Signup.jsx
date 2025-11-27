import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../components/AuthInput";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are required!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email address!");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters!");
            return;
        }

        // Get existing users
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user already exists
        if (storedUsers.find(u => u.email === email)) {
            setError("User already exists!");
            return;
        }

        // Add new user
        const newUser = { name, email, password, role: "user" }; // default role is user
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));

        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSignup}>
                    <AuthInput label="Full Name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
                    <AuthInput label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" />
                    <AuthInput label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="******" />
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition mt-4">
                        Sign Up
                    </button>
                </form>
                <p className="text-gray-500 mt-4 text-center">
                    Already have an account?{" "}
                    <span className="text-green-500 font-medium cursor-pointer" onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}
