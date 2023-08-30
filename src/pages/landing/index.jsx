import StoreHeading from "./components/store-heading";
import ProductListings from "./components/product-listings";

export default function Landing() {
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings />
    </div>
  );
}
