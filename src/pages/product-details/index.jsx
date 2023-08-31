import { useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

function ProductPage({ productData = null }) {
  const [isLoading] = useState(false);

  const atcBtnStyle = isLoading
    ? `pt-3 pb-2 bg-purple-500 text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-purple-600 opacity-25 cursor-none`
    : `pt-3 pb-2 bg-purple-500 text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-purple-600`;
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      {/* Product section */}
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        {/* Product Image */}
        <div className="w-full md:w-1/2 max-w-md border border-purple-50 bg-white rounded shadow-lg">
          <div className="relative h-96 overflow-hidden">
            <img
              src={
                "https://fakeimg.pl/400x600/2c3af5/ffffff?text=Ecommerce+Sample+Project"
              }
              alt={"product description"}
              className="transform duration-500 ease-in-out hover:scale-105 h-full w-full object-cover"
            />
          </div>
          {/* <div className="relative flex border-t border-purple-50">
            <button
              aria-label="left-scroll"
              className="h-32 bg-purple-50 hover:bg-purple-100  absolute left-0 z-10 opacity-75"
              onClick={() => scroll(-300)}
            >
              <FaArrowLeft className="w-3 mx-1 text-purple-500" />
            </button>
            <div
              ref={ref}
              style={{ scrollBehavior: "smooth" }}
              className="flex space-x-1 w-full overflow-auto border-t border-purple-50"
            >
              {
                images.map((imgItem, index) => (
                  <button
                    key={index}
                    className="relative w-40 h-32 flex-shrink-0 rounded-sm "
                    onClick={() => setMainImg(imgItem.node)}
                  >
                    <Image
                      src={imgItem.node.originalSrc}
                      alt={imgItem.node.altText}
                      layout="fill"
                      className=""
                    />
                  </button>
                ))
              }
            </div>
            <button
              aria-label="right-scroll"
              className="h-32 bg-purple-50 hover:bg-purple-100  absolute right-0 z-10 opacity-75"
              onClick={() => scroll(300)}
            >
              <FaArrowRight className="w-3 mx-1 text-purple-500" />
            </button>
          </div> */}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
          {/* <BackToProductButton /> */}
          <a href="/">
            <a
              aria-label="back-to-products"
              className="border border-purple-500 text-purple-500 text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-purple-100 focus:outline-none w-full hover:bg-purple-50 rounded-sm"
            >
              <FaArrowLeft className="w-4 mr-2 inline-flex" />
              Back To All Products
            </a>
          </a>

          {/* <ProductInfo
            title={productData.title}
            description={productData.description}
            price={variantPrice}
          /> */}
          <div className=" font-primary">
            <h1 className="leading-relaxed font-extrabold text-3xl text-purple-500 py-2 sm:py-4">
              PRoduct title
            </h1>
            <p className="font-medium text-lg">Product description</p>
            <div className="text-xl text-purple-500 font-medium py-4 px-1">
              <span className={"text-lg"}>5000</span>
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
