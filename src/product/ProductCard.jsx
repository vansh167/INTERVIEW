import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                />

                <div className="p-4">
                    <h3 className="text-gray-800 font-medium text-sm mb-1">
                        {product.name}
                    </h3>

                    <p className="text-gray-500 text-xs mb-2">
                        {product.category}
                    </p>

                    <div className="flex justify-between items-center">
                        <span className="text-[#2BB673] font-semibold">₹{product.price}</span>

                        <button className="text-gray-400 hover:text-[#2BB673]">
                            ♥
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
