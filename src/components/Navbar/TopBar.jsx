import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="w-full bg-[#2BB673] text-white text-sm py-2.5">
            <div className="max-w-[1380px] mx-auto flex justify-between items-center px-5">
                <span className="tracking-wide font-medium">ORDER TRACKING</span>
                <span className="flex items-center gap-1.5 text-sm">
                    <span>Refer and earn extra discount</span>
                    <Link
                        to="/refer-and-earn"
                        className="underline hover:opacity-80"
                    >
                        Click here...
                    </Link>
                </span>
            </div>
        </div>
    );
}
