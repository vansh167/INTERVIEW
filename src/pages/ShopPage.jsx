import { useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import Navbar from "../components/Navbar/Navbar";
import FilterSidebar from "../FilterSide/FilterSection";
import ProductGrid from "../product/ProductGrid";

export default function ShopPage() {
    const { products } = useContext(ProductsContext); // read products from context
    const [filters, setFilters] = useState({
        categories: [],
        metals: [],
        gemstones: [],
        price: [0, 10000],
    });

    const handleFilterChange = (newFilters) => setFilters(newFilters);

    const filteredProducts = products.filter((product) => {
        const inCategory = filters.categories.length
            ? filters.categories.includes(product.category)
            : true;
        const inMetal = filters.metals.length
            ? filters.metals.includes(product.metal)
            : true;
        const inGemstone = filters.gemstones.length
            ? filters.gemstones.includes(product.gemstone)
            : true;
        const inPrice =
            product.price >= filters.price[0] && product.price <= filters.price[1];
        return inCategory && inMetal && inGemstone && inPrice;
    });

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-5 mt-6 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-64 flex-shrink-0">
                    <FilterSidebar filters={filters} onChange={handleFilterChange} />
                </div>
                <div className="flex-1">
                    <ProductGrid dynamicProducts={filteredProducts} />

                </div>
            </div>
        </>
    );
}
