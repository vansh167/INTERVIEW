import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ReferAndEarn from "./pages/ReferAndEarn";
import ReadyStock from "./pages/ReadyStock";
import JSP from "./pages/JSP";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import { ProductsProvider } from "./pages/ProductsContext";
import AdminProducts from "./pages/AdminProducts";
import SearchResults from "./pages/SearchResult";

// Category pages
import Rings from "./category/Rings";
import NewArrival from "./category/NewArival";
import Earring from "./category/Earring";
import Pendants from "./category/Pendants";
import Braceletas from "./category/Braceletas";
import Solitaires from "./category/Solitaires";
import GoldCoin from "./category/GoldCoin";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <div className="bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/refer-and-earn" element={<ReferAndEarn />} />
            <Route path="/ready-stock" element={<ReadyStock />} />
            <Route path="/jsp" element={<JSP />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Category routes */}
            <Route path="/rings" element={<Rings />} />
            <Route path="/new-arrival" element={<NewArrival />} />
            <Route path="/earrings" element={<Earring />} />
            <Route path="/pendants" element={<Pendants />} />
            <Route path="/bracelets-bangles" element={<Braceletas />} />
            <Route path="/solitaires" element={<Solitaires />} />
            <Route path="/gold-coins" element={<GoldCoin />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-products" element={<AdminProducts />} />
          </Routes>
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;
