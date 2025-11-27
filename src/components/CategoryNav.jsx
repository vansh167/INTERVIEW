import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    "NEW ARRIVAL",
    "RINGS",
    "EARRINGS",
    "PENDANTS",
    "BRACELETS & BANGLES",
    "SOLITAIRES",
    "GOLD COINS",
];

export default function CategoryNav() {
    const [active, setActive] = useState(categories[0]); // default active
    const navigate = useNavigate();

    const handleClick = (category) => {
        setActive(category); // set clicked category as active

        // Convert category name to URL path
        const path = category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
        navigate(`/${path}`); // navigate to dedicated page
    };

    return (
        <div className="w-full bg-white border-b border-gray-100">
            <div className="max-w-[1380px] mx-auto flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-10 text-[14px] text-gray-700 font-medium tracking-wide">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item)}
                            className={`transition ${active === item
                                    ? "text-[#2BB673] border-b-2 border-[#2BB673] font-semibold"
                                    : "hover:text-[#2BB673]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button className="border border-[#2BB673] text-[#2BB673] px-5 py-2 rounded-md text-sm font-medium bg-[#2BB673]/10 hover:bg-[#2BB673] hover:text-white transition">
                    OFFERS
                </button>
            </div>
        </div>
    );
}
