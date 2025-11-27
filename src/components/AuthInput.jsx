import React from "react";

export default function AuthInput({ label, type, value, onChange, placeholder }) {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-gray-700 mb-1 font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            />
        </div>
    );
}
