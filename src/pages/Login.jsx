import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../components/AuthInput";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find(u => u.email === email && u.password === password);

        if (!user) {
            setError("Invalid email or password!");
            return;
        }

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleLogin}>
                    <AuthInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                    />
                    <AuthInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="******"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition mt-4"
                    >
                        Login
                    </button>
                </form>
                <p className="text-gray-500 mt-4 text-center">
                    Don’t have an account?{" "}
                    <span className="text-green-500 font-medium cursor-pointer" onClick={() => navigate("/signup")}>
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}
