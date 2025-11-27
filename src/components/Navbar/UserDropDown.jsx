import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserDropdown({ user, onLogout, onLogin }) {
    const navigate = useNavigate();

    const goToAdminProducts = () => {
        navigate("/admin-products"); // New page route
    };

    return (
        <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50"
            onClick={(e) => e.stopPropagation()}
        >
            {user ? (
                <>
                    <p className="px-4 py-2 text-gray-700 font-medium">
                        Hello, {user.name}
                    </p>

                    {user.role === "admin" && (
                        <>
                            <button
                                onClick={goToAdminProducts}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors"
                            >
                                Products Dashboard
                            </button>
                        </>
                    )}

                    <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <button
                    onClick={onLogin}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors"
                >
                    Login
                </button>
            )}
        </div>
    );
}
