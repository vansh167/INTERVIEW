import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";

export default function ReferPage() {
    const [referralCode] = useState("GEMLAY123");
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Navbar/>
        <div className="min-h-screen bg-gray-50 p-5 flex flex-col items-center">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Refer & Earn with Gemlay
            </h1>

            {/* Referral Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col items-center">
                <p className="text-gray-700 text-center mb-4">
                    Share your referral code with friends and earn rewards!
                </p>

                <div className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-gray-100">
                    <span className="font-medium text-gray-800">{referralCode}</span>
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition"
                    >
                        <FiCopy />
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>

                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition w-full mb-4">
                    Share Now
                </button>

                <p className="text-gray-500 text-sm text-center">
                    For every friend that joins using your referral code, you get rewards!
                </p>
            </div>

            {/* Rewards Section */}
            <div className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">₹500</h3>
                    <p className="text-gray-600">Earned per successful referral</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Unlimited</h3>
                    <p className="text-gray-600">No limit on the number of referrals</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Instant</h3>
                    <p className="text-gray-600">Rewards credited instantly</p>
                </div>
            </div>
            </div>
        </>
    );
}
