import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import CartPage from "./pages/cart";
import ProductPage from "./pages/product-details";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { createContext, useState } from "react";

export const CartContext = createContext();

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/products/all" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </CartContext.Provider>
  );
}
