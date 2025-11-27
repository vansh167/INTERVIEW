import React, { useState, useEffect } from "react";
import { FiSearch, FiCamera, FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import UserDropdown from "./Navbar/UserDropDown";

export default function MainNavbar() {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (!storedUsers.find((u) => u.email === "admin@gmail.com")) {
            storedUsers.push({ name: "Admin", email: "admin@gmail.com", password: "admin123", role: "admin" });
            localStorage.setItem("users", JSON.stringify(storedUsers));
        }

        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const handleLogin = () => {
        setDropdownOpen(false);
        navigate("/login");
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        setUser(null);
        setDropdownOpen(false);
        navigate("/login");
    };

    const handleSearch = () => {
        if (searchQuery.trim() === "") return;

        // Get products from localStorage
        const products = JSON.parse(localStorage.getItem("products")) || [];

        // Filter products whose name includes search query
        const results = products.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Store results in localStorage temporarily to pass to results page
        localStorage.setItem("searchResults", JSON.stringify(results));

        // Navigate to search results page
        navigate("/search-results");
    };


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const navLinks = [
        { path: "refer-and-earn", label: "📎 Refer & Earn" },
        { path: "ready-stock", label: "🚚 Ready Stock" },
        { path: "jsp", label: "🎉 JSP" },
    ];

    return (
        <div className="w-full bg-white py-4 border-b border-gray-100">
            <div className="max-w-[1380px] mx-auto flex items-center justify-between px-5">

                {/* Logo */}
                <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                    <img src="/src/assets/logo001.jpg" alt="Gemlay Logo" className="h-10 w-auto mr-2" />
                    <span className="text-2xl font-bold text-[#2BB673]">Jewelix</span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 px-10">
                    <div className="relative max-w-xl w-full mx-auto">
                        <input
                            type="text"
                            placeholder="Slim Sparkle Diamond Ring |"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full border border-gray-300 rounded-full py-3 pl-5 pr-16 text-gray-700 text-[15px] placeholder-gray-500 focus:border-[#2BB673] focus:ring-[#2BB673]/40 focus:ring-2 outline-none transition"
                        />
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-4 text-gray-600">
                            <FiCamera size={18} className="cursor-pointer hover:text-[#2BB673]" />
                            <FiSearch
                                size={18}
                                className="cursor-pointer hover:text-[#2BB673]"
                                onClick={handleSearch}
                            />
                        </div>
                    </div>
                </div>

                {/* Nav Links & Icons */}
                <div className="flex items-center gap-6">
                    {navLinks.map(({ path, label }) => {
                        const [icon, text] = label.split(" ");
                        return (
                            <NavLink
                                key={path}
                                to={`/${path}`}
                                className={({ isActive }) =>
                                    `flex items-center gap-1.5 text-sm font-medium ${isActive ? "text-[#2BB673]" : "text-gray-700 hover:text-[#2BB673]"}`
                                }
                            >
                                <span>{icon}</span>
                                <span>{text}</span>
                            </NavLink>
                        );
                    })}

                    {user?.role && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded font-medium">
                            {user.role === "admin" ? "Admin" : user.role === "sub-admin" ? "Sub-Admin" : ""}
                        </span>
                    )}

                    <FiHeart size={22} className="cursor-pointer hover:text-[#249a63]" />
                    <div className="relative cursor-pointer">
                        <FiShoppingCart size={22} className="hover:text-[#249a63]" />
                        <span className="absolute -top-1.5 -right-2 bg-[#2BB673] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                            0
                        </span>
                    </div>

                    <div className="relative">
                        <FiUser size={22} className="cursor-pointer hover:text-[#249a63]" onClick={() => setDropdownOpen(!dropdownOpen)} />
                        {dropdownOpen && <UserDropdown user={user} onLogin={handleLogin} onLogout={handleLogout} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
