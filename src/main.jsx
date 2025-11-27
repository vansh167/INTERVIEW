import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./pages/ProductsContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <ProductsProvider>
      <App />
  </ProductsProvider>
  </React.StrictMode>
);
