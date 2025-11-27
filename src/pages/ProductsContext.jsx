// ProductsContext.js
import { createContext, useState, useEffect } from "react";


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    // Initialize from localStorage
    const [products, setProducts] = useState(() => {
        const storedProducts = localStorage.getItem("products");
        return storedProducts ? JSON.parse(storedProducts) : [];
    });

    // Whenever products change, save to localStorage
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
           
        </ProductsContext.Provider>
    );
};
