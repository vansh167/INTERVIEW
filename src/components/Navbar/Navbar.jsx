import React from "react";
import TopBar from "./TopBar";
import MainNavbar from "../MainNavbar";
import CategoryNav from "../CategoryNav";


export default function Navbar() {
    return (
        <div className="w-full font-[Inter]">
            <TopBar />
            <MainNavbar />
            <CategoryNav />
        </div>
    );
}
