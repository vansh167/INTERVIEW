import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import Navbar from "../components/Navbar/Navbar";

const staticProducts = [
    // your existing static array here...
];

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);

    const [storedProducts, setStoredProducts] = useState([]);

    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setStoredProducts(savedProducts);
    }, []);

    // Combine dynamic + static
    const allProducts = [...storedProducts, ...staticProducts];

    // Find product by ID
    const product = allProducts.find((p) => p.id == id);

    if (!product) {
        return <h2 className="text-center mt-20 text-xl">Product Not Found</h2>;
    }

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto py-10 flex gap-10">
                <img
                    src={product.image}
                    className="w-96 h-96 object-cover rounded-xl"
                    alt={product.name}
                />

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-2xl font-bold mt-4">₹{product.price}</p>

                    <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
