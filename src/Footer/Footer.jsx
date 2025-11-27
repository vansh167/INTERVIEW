import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaApple, FaGooglePlay, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Column 1: Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Contact</h4>
                    <p className="mb-2"><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                    <p className="mb-2"><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
                    <p className="mb-4"><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                    <h4 className="font-bold text-lg mb-2">Follow Us</h4>
                    <div className="flex gap-3 text-xl">
                        <FaFacebookF className="hover:text-green-500 cursor-pointer" />
                        <FaTwitter className="hover:text-green-500 cursor-pointer" />
                        <FaInstagram className="hover:text-green-500 cursor-pointer" />
                        <FaPinterestP className="hover:text-green-500 cursor-pointer" />
                        <FaYoutube className="hover:text-green-500 cursor-pointer" />
                    </div>
                </div>

                {/* Column 2: About */}
                <div>
                    <h4 className="font-bold text-lg mb-4">About</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-500">About Us</a></li>
                        <li><a href="#" className="hover:text-green-500">Delivery Information</a></li>
                        <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3: My Account */}
                <div>
                    <h4 className="font-bold text-lg mb-4">My Account</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-500">Sign In</a></li>
                        <li><a href="#" className="hover:text-green-500">View Cart</a></li>
                        <li><a href="#" className="hover:text-green-500">My Wishlist</a></li>
                        <li><a href="#" className="hover:text-green-500">Track My Order</a></li>
                        <li><a href="#" className="hover:text-green-500">Help</a></li>
                    </ul>
                </div>

                {/* Column 4: Install App / Payment */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Install App</h4>
                    <p className="mb-4">From App Store or Google Play</p>
                    <div className="flex gap-3 mb-4 text-3xl">
                        <FaApple className="hover:text-green-500 cursor-pointer" />
                        <FaGooglePlay className="hover:text-green-500 cursor-pointer" />
                    </div>
                    <p className="mb-2">Secured Payment Gateways</p>
                    <div className="flex gap-3 text-2xl">
                        <FaCcVisa className="hover:text-green-500 cursor-pointer" />
                        <FaCcMastercard className="hover:text-green-500 cursor-pointer" />
                        <FaCcPaypal className="hover:text-green-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-400">
                <p>© 2025 - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
