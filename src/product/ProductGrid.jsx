import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import About from "../pages/About";

// Static products
const staticProducts = [
    { id: 1, name: "Product 01", category: "Rings", price: 499, image: "/src/assets/01.avif" },
    { id: 2, name: "Product 02", category: "Rings", price: 299, image: "/src/assets/02.avif" },
    { id: 3, name: "Product 03", category: "Earrings", price: 699, image: "/src/assets/03.avif" },
    { id: 4, name: "Product 04", category: "Bracelets", price: 799, image: "/src/assets/04.avif" },
    { id: 5, name: "Product 05", category: "Pendants", price: 599, image: "/src/assets/05.avif" },
    { id: 6, name: "Product 06", category: "Rings", price: 450, image: "/src/assets/06.avif" },
    { id: 7, name: "Product 07", category: "Earrings", price: 750, image: "/src/assets/07.avif" },
    { id: 8, name: "Product 08", category: "Bracelets", price: 850, image: "/src/assets/08.avif" },
    { id: 9, name: "Product 09", category: "Rings", price: 550, image: "/src/assets/09.webp" },
    { id: 10, name: "Product 10", category: "Pendants", price: 650, image: "/src/assets/10.webp" },
    { id: 11, name: "Product 11", category: "Bracelets", price: 700, image: "/src/assets/11.avif" },
    { id: 12, name: "Product 12", category: "Rings", price: 400, image: "/src/assets/12.avif" },
    { id: 13, name: "Product 13", category: "Earrings", price: 900, image: "/src/assets/13.avif" },
    { id: 14, name: "Product 14", category: "Pendants", price: 300, image: "/src/assets/14.avif" },
    { id: 15, name: "Product 15", category: "Bracelets", price: 800, image: "/src/assets/15.avif" },
    { id: 16, name: "Product 16", category: "Rings", price: 950, image: "/src/assets/16.avif" },
];

export default function ProductGrid({ dynamicProducts = [] }) {
    const [storedProducts, setStoredProducts] = useState([]);

    useEffect(() => {
        // Load dynamic products from localStorage
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setStoredProducts(savedProducts);
    }, []);

    // Combine dynamic products from localStorage + static products
    const allProducts = [...storedProducts, ...staticProducts];

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
            <br></br><br></br><br></br><br></br>
            <About/>
    </>
    );
}
