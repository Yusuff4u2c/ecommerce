import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Loading from "./components/loading";

function ProductPage() {
  const [isLoading] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState();

  const fetchProduct = async () => {
    try {
      // https://fakestoreapi.com/products
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.warn("fetching product ", productId, error);
      toast.error(error.message);
    }
  };

  // fetch our products
  useEffect(() => {
    fetchProduct();
  }, []);

  const atcBtnStyle = isLoading
    ? `pt-3 pb-2 bg-purple-500 text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-purple-600 opacity-25 cursor-none`
    : `pt-3 pb-2 bg-purple-500 text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-purple-600`;

  if (!product) return <Loading />;

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      {/* Product section */}
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        {/* Product Image */}
        <div className="w-full md:w-1/2 max-w-md border border-purple-50 bg-white rounded shadow-lg">
          <div className="relative h-96 overflow-hidden">
            <img
              src={product.image}
              alt={"product description"}
              className="transform duration-500 ease-in-out hover:scale-105 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
          <a
            href="/"
            aria-label="back-to-products"
            className="border border-purple-500 text-purple-500 text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex
      justify-center items-center focus:ring-1 focus:ring-purple-100 focus:outline-none w-full hover:bg-purple-50 rounded-sm"
          >
            <FaArrowLeft className="w-4 mr-2 inline-flex" />
            Back To All Products
          </a>

          <div className=" font-primary">
            <h1 className="leading-relaxed font-extrabold text-3xl text-purple-500 py-2 sm:py-4">
              {product.title}
            </h1>
            <p className="font-medium text-lg">{product.description}</p>
            <div className="text-xl text-purple-500 font-medium py-4 px-1">
              <span className={"text-lg"}>${product.price}</span>
            </div>
          </div>

          {/* <ProductForm
            title={productData.title}
            handle={productData.handle}
            variants={productData.variants.edges}
            mainImg={productData.images.edges[0].node}
            setVariantPrice={setVariantPrice}
          /> */}

          <div className="w-full">
            <div className="flex justify-start space-x-2 w-full">
              <div className="flex flex-col items-start space-y-1 flex-grow-0">
                <label className="text-gray-500 text-base">Qty.</label>
                <input
                  type="number"
                  inputMode="numeric"
                  id="quantity"
                  name="quantity"
                  min="1"
                  step="1"
                  value={1}
                  className="text-gray-900 py-2 px-2 border border-gray-300 w-16 rounded-sm focus:border-purple-100 focus:ring-purple-100"
                />
              </div>
            </div>
            <button className={atcBtnStyle} aria-label="cart-button">
              Add To Cart
              <FaShoppingCart className="w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
