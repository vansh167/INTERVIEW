import React from "react";

export default function FilterSidebar({ filters, setFilters }) {
    const categories = ["Rings", "Earrings", "Pendants", "Bracelets"];
    const metals = ["Gold", "Silver", "Platinum"];
    const gemstones = ["Diamond", "Ruby", "Emerald", "Sapphire"];

    const handleCheckbox = (type, value) => {
        setFilters((prev) => {
            const list = prev[type].includes(value)
                ? prev[type].filter((item) => item !== value)
                : [...prev[type], value];
            return { ...prev, [type]: list };
        });
    };

    const handlePriceChange = (e) => {
        const value = Number(e.target.value);
        const name = e.target.name;
        setFilters((prev) => ({
            ...prev,
            price: name === "min" ? [value, prev.price[1]] : [prev.price[0], value],
        }));
    };

    const renderGroup = (title, options, type) => (
        <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">{title}</h3>
            <div className="flex flex-col gap-2">
                {options.map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#2BB673] cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={filters[type].includes(opt)}
                            onChange={() => handleCheckbox(type, opt)}
                            className="accent-[#2BB673]"
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-64 p-5 bg-white border border-gray-200 rounded-lg shadow-sm sticky top-5 h-fit">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {renderGroup("Category", categories, "categories")}
            {renderGroup("Metal Type", metals, "metals")}
            {renderGroup("Gemstones", gemstones, "gemstones")}

            <div className="mb-6">
                <h3 className="font-medium mb-2 text-gray-700">Price Range</h3>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        name="min"
                        value={filters.price[0]}
                        onChange={handlePriceChange}
                        className="w-20 border border-gray-300 rounded px-2 py-1 text-gray-700"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        name="max"
                        value={filters.price[1]}
                        onChange={handlePriceChange}
                        className="w-20 border border-gray-300 rounded px-2 py-1 text-gray-700"
                    />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                    Selected: ₹{filters.price[0]} - ₹{filters.price[1]}
                </p>
            </div>
        </div>
    );
}
