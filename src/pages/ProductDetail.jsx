import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import Navbar from "../components/Navbar/Navbar";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        // find product from dynamic or static
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        const allProducts = [...savedProducts, ...products];

        const found = allProducts.find((p) => p.id == id);
        setProduct(found);
    }, [id, products]);

    if (!product) return <p className="text-center mt-20">Product Not Found...</p>;

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto py-10 px-5">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Product Image */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded-lg shadow"
                    />

                    {/* Product Info */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                        <p className="text-gray-500">{product.category}</p>

                        <p className="text-2xl font-bold text-[#2BB673] mt-3">
                            ₹{product.price}
                        </p>

                        <button className="mt-6 bg-[#2BB673] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Bottom Description */}
                <div className="mt-16 border-t pt-10">
                    <h2 className="text-2xl font-semibold mb-4">Product Description</h2>

                    <p className="text-gray-700 leading-7 text-lg">
                        {product.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Category:</p>
                            <p className="text-gray-600">{product.category}</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Metal:</p>
                            <p className="text-gray-600">{product.metal}</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                            <p className="font-semibold">Gemstone:</p>
                            <p className="text-gray-600">{product.gemstone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
