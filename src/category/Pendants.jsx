import { useContext } from "react";
import { ProductsContext } from "../pages/ProductsContext";
import Navbar from "../components/Navbar/Navbar";

const Pendants = () => {
    const { products } = useContext(ProductsContext);
    const pendantProducts = products.filter((p) => p.category === "PENDANTS");

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto py-10">
                <h1 className="text-2xl font-bold mb-6">Pendants</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {pendantProducts.length ? (
                        pendantProducts.map((product) => (
                            <div key={product.id} className="border p-4 rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <h2 className="mt-2 font-semibold">{product.name}</h2>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="mt-1 font-bold">₹{product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No pendants added yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Pendants;
