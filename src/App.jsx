import Navigation from "./components/navigation";
import Landing from "./pages/landing";
import ProductPage from "./pages/product-details";

export default function App() {
  return (
    <div>
      <Navigation />
      <ProductPage />
    </div>
  );
}
