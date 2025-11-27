import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function SearchResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const storedResults = JSON.parse(localStorage.getItem("searchResults")) || [];
        setResults(storedResults);
    }, []);

    return (
        <><Navbar/>
        <div className="max-w-5xl mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            {results.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {results.map((product, index) => (
                        <div key={index} className="border p-3 rounded">
                            <img src={product.image || "/src/assets/logo001.jpg"} alt={product.name} className="w-full h-40 object-cover mb-2" />
                            <h2 className="font-medium">{product.name}</h2>
                            <p className="text-gray-500">₹{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </>
    );
}
