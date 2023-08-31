import { Fragment } from "react";

export default function ProductListings() {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <Fragment key={index}>
            {/* start of a product */}
            <a href={`#`}>
              <div className="h-120 w-72 rounded shadow-lg mx-auto border border-purple-50">
                <div className="h-72 border-b-2 border-purple-50 relative overflow-hidden">
                  <img
                    src={
                      "https://fakeimg.pl/400x600/2c3af5/ffffff?text=Ecommerce+Sample+Project"
                    }
                    alt={"product image"}
                    className="transform duration-500 ease-in-out hover:scale-110 h-full w-full object-cover"
                  />
                </div>
                <div className="h-48 relative">
                  <div className="font-primary text-purple-500 text-2xl pt-4 px-4 font-semibold">
                    Product title
                  </div>
                  <div className="text-lg text-gray-600 p-4 font-primary font-light">
                    Product description
                  </div>
                  <div
                    className="text-purple-600 font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-blue-100 
            rounded-tl-sm triangle"
                  >
                    <span className={"text-lg"}>5000</span>
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
