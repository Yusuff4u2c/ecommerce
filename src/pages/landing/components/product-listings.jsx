import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ProductListings() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      // https://fakestoreapi.com/products
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.warn("fetching products ", error);
      toast.error(error.message);
    }
  };

  // fetch our products
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <Fragment key={index}>
          {/* start of a product */}
          <a href={`/products/${product.id}`}>
            <div className="h-120 w-72 rounded shadow-lg mx-auto border border-purple-50">
              <div className="h-72 border-b-2 border-purple-50 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} images`}
                  className="transform duration-500 ease-in-out hover:scale-110 h-full w-full object-cover"
                />
              </div>
              <div className="h-48 relative">
                <div className="font-primary text-purple-500 text-2xl pt-4 px-4 font-semibold">
                  {product.title}
                </div>
                <div
                  className="text-purple-600 font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-blue-100 
            rounded-tl-sm triangle"
                >
                  <span className={"text-lg"}>${product.price}</span>
                </div>
              </div>
            </div>
          </a>
          {/* end */}
        </Fragment>
      ))}
    </div>
  );
}
