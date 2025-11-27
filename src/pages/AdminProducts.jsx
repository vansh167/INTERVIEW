import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
    }, []);

    // Delete product permanently
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const updatedProducts = products.filter((p) => p.id !== id);
            setProducts(updatedProducts);
            localStorage.setItem("products", JSON.stringify(updatedProducts));
        }
    };

    const handleAddProduct = () => {
        navigate("/add-product");
    };

    return (
        <>
            <Navbar/>
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <h1 className="text-2xl font-bold mb-2 sm:mb-0">
                    Admin Products Dashboard
                </h1>
                <button
                    onClick={handleAddProduct}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    + Add Product
                </button>
            </div>

            {/* Total Posts */}
            <p className="mb-6 text-gray-700 font-medium text-lg">
                Total Posts: <span className="text-green-600">{products.length}</span>
            </p>

            {/* Products Grid */}
            {products.length === 0 ? (
                <p className="text-gray-500">No products added yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow-sm relative">
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover mb-2 rounded"
                                />
                            )}
                            <h2 className="font-medium">{product.name}</h2>
                            <p className="text-gray-500 text-sm">{product.category}</p>
                            <p className="font-semibold">₹{product.price}</p>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="absolute top-2 right-2 px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </>
    );
}
