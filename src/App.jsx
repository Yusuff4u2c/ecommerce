import Footer from "./components/footer";
import Navigation from "./components/navigation";
import CartPage from "./pages/cart";
import Landing from "./pages/landing";
import ProductPage from "./pages/product-details";

export default function App() {
  return (
    <div>
      <Navigation />
      <CartPage />
      <Footer />
    </div>
  );
}
