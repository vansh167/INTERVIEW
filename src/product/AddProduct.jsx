import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../pages/ProductsContext";
import Navbar from "../components/Navbar/Navbar";

const categoriesList = [
    "NEW ARRIVAL",
    "RINGS",
    "EARRINGS",
    "PENDANTS",
    "BRACELETS & BANGLES",
    "SOLITAIRES",
    "GOLD COINS",

];

const metalsList = ["Gold", "Silver", "Platinum"];
const gemstonesList = ["Diamond", "Ruby", "Emerald", "Sapphire"];

const AddProduct = () => {
    const { products, setProducts } = useContext(ProductsContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState(categoriesList[0]);
    const [metal, setMetal] = useState(metalsList[0]);
    const [gemstone, setGemstone] = useState(gemstonesList[0]);
    const [message, setMessage] = useState("");

    // Load products from localStorage on mount
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !price) {
            setMessage("Please fill all required fields!");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: title,
            description,
            price: Number(price),
            image,
            category,
            metal,
            gemstone,
        };

        const updatedProducts = [newProduct, ...products];
        setProducts(updatedProducts);

        // Save to localStorage
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        setMessage("Product added successfully!");
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Add New Product
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Product Name */}
                        <div>
                            <label className="block font-medium mb-2 text-gray-700">
                                Product Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter product name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block font-medium mb-2 text-gray-700">
                                Description
                            </label>
                            <textarea
                                placeholder="Enter product description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                rows={4}
                                required
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block font-medium mb-2 text-gray-700">
                                Price
                            </label>
                            <input
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block font-medium mb-2 text-gray-700">
                                Image URL
                            </label>
                            <input
                                type="text"
                                placeholder="Enter image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Category, Metal, Gemstone */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block font-medium mb-2 text-gray-700">
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {categoriesList.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block font-medium mb-2 text-gray-700">
                                    Metal
                                </label>
                                <select
                                    value={metal}
                                    onChange={(e) => setMetal(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {metalsList.map((m) => (
                                        <option key={m} value={m}>
                                            {m}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block font-medium mb-2 text-gray-700">
                                    Gemstone
                                </label>
                                <select
                                    value={gemstone}
                                    onChange={(e) => setGemstone(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {gemstonesList.map((g) => (
                                        <option key={g} value={g}>
                                            {g}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
                        >
                            Add Product
                        </button>

                        {/* Message */}
                        {message && <p className="text-green-600 text-center mt-2">{message}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
