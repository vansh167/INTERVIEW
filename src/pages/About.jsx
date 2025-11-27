import Navbar from "../components/Navbar/Navbar";

export default function About() {
    return (
        <>
           

            <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
                        About <span className="text-[#2BB673]">Gemlay</span>
                    </h1>

                    {/* Intro Section */}
                    <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg leading-8">
                        At <span className="font-semibold text-[#2BB673]">Gemlay</span>, we believe
                        jewelry is more than an accessory — it's an emotion, a memory, and a
                        reflection of your personality. We bring you timeless elegance crafted
                        with precision and love.
                    </p>

                    {/* Two Column Section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* Left Image */}
                        <img
                            src="/src/assets/about-image.jpg"
                            alt="Jewelry craftsmanship"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">
                                Crafting Beauty Since Day One
                            </h2>
                            <p className="text-gray-600 leading-7 mb-4">
                                Our pieces are carefully crafted by skilled artisans who combine
                                modern techniques with traditional craftsmanship. Every gemstone,
                                diamond, and metal is hand-picked to ensure exceptional quality.
                            </p>

                            <p className="text-gray-600 leading-7">
                                Whether you're searching for rings, earrings, pendants, or
                                solitaires — Gemlay offers designs for every moment, every
                                celebration, and every story.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="bg-gray-50 p-8 rounded-xl shadow">
                            <h3 className="text-3xl font-bold text-[#2BB673]">10K+</h3>
                            <p className="text-gray-600 mt-2">Happy Customers</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl shadow">
                            <h3 className="text-3xl font-bold text-[#2BB673]">500+</h3>
                            <p className="text-gray-600 mt-2">Premium Designs</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl shadow">
                            <h3 className="text-3xl font-bold text-[#2BB673]">100%</h3>
                            <p className="text-gray-600 mt-2">Quality Guarantee</p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 max-w-4xl mx-auto leading-8 text-lg">
                            To make premium jewelry accessible to everyone by offering
                            handcrafted, ethically sourced, and beautifully designed pieces
                            at the best value.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
