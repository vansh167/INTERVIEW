import React, { useState } from "react";

// Import static images
import jsp1 from "../assets/01.avif";
import jsp2 from "../assets/02.avif";
import jsp3 from "../assets/07.avif";
import jsp4 from "../assets/10.webp";
import Navbar from "../components/Navbar/Navbar";

export default function JspPage() {
    // Static JSP items
    const allItems = [
        { id: 1, title: "JSP Offer 1", category: "Rings", price: 5000, popularity: 4, image: jsp1 },
        { id: 2, title: "JSP Offer 2", category: "Earrings", price: 3000, popularity: 5, image: jsp2 },
        { id: 3, title: "JSP Offer 3", category: "Pendants", price: 7000, popularity: 3, image: jsp3 },
        { id: 4, title: "JSP Offer 4", category: "Bracelets", price: 4500, popularity: 4, image: jsp4 },
    ];

    const [filters, setFilters] = useState({
        categories: [],
        minPrice: 0,
        maxPrice: 10000,
        sort: "",
    });

    const categories = ["Rings", "Earrings", "Pendants", "Bracelets"];

    const handleCategory = (cat) => {
        setFilters((prev) => {
            const newCats = prev.categories.includes(cat)
                ? prev.categories.filter((c) => c !== cat)
                : [...prev.categories, cat];
            return { ...prev, categories: newCats };
        });
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: Number(value) }));
    };

    const handleSortChange = (e) => {
        setFilters((prev) => ({ ...prev, sort: e.target.value }));
    };

    // Filter & sort items
    const filteredItems = allItems
        .filter(
            (item) =>
                (filters.categories.length === 0 || filters.categories.includes(item.category)) &&
                item.price >= filters.minPrice &&
                item.price <= filters.maxPrice
        )
        .sort((a, b) => {
            if (filters.sort === "priceAsc") return a.price - b.price;
            if (filters.sort === "priceDesc") return b.price - a.price;
            if (filters.sort === "popularity") return b.popularity - a.popularity;
            return 0;
        });

    return (
        <><Navbar/>
        <div className="min-h-screen bg-gray-50 p-5">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                🎉 JSP Special Offers ({filteredItems.length})
            </h1>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            className={`px-3 py-1 rounded-full border ${filters.categories.includes(cat)
                                    ? "bg-green-600 text-white border-green-600"
                                    : "text-gray-700 border-gray-300 hover:bg-green-100"
                                } transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Price Range */}
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handlePriceChange}
                        className="w-20 border border-gray-300 rounded px-2 py-1"
                        placeholder="Min"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handlePriceChange}
                        className="w-20 border border-gray-300 rounded px-2 py-1"
                        placeholder="Max"
                    />
                </div>

                {/* Sort */}
                <select
                    value={filters.sort}
                    onChange={handleSortChange}
                    className="border border-gray-300 rounded px-3 py-1"
                >
                    <option value="">Sort By</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>

            {/* JSP Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.length === 0 ? (
                    <p className="text-center text-gray-500 col-span-full">No offers found!</p>
                ) : (
                    filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
                                <p className="text-gray-600 mb-2">{item.category}</p>
                                <p className="text-gray-700 font-medium mb-4">₹{item.price}</p>
                                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                                    Grab Offer
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            </div>
        </>
    );
}
