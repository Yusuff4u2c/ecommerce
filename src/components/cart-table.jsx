import { FaTimes } from "react-icons/fa";

function CartTable() {
  return (
    <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-purple-500 border-b border-purple-100">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">
              Price
            </th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-50">
          {/* cart item */}
          <tr className="text-sm sm:text-base text-gray-600 text-center">
            <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
              <img
                src={
                  "https://fakeimg.pl/400x600/2c3af5/ffffff?text=Ecommerce+Sample+Project"
                }
                alt={"random image"}
                height={64}
                width={64}
                className={`hidden sm:inline-flex`}
              />
              <a href={``} className="pt-1 hover:text-purple-600">
                product title, variant
              </a>
            </td>
            <td className="font-primary font-medium px-4 sm:px-6 py-4">
              <input
                type="number"
                inputMode="numeric"
                id="variant-quantity"
                name="variant-quantity"
                min="1"
                step="1"
                value={0}
                className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-purple-100 focus:ring-purple-100"
              />
            </td>
            <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
              <span className="text-lg">5000</span>
            </td>
            <td className="font-primary font-medium px-4 sm:px-6 py-4">
              <button aria-label="delete-item" className="">
                <FaTimes className="w-8 h-8 text-purple-500 border border-purple-500 p-1 hover:bg-purple-50" />
              </button>
            </td>
          </tr>
          {/* End of cart item */}
          {/* sub total */}
          <tr className="text-center">
            <td></td>
            <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
              Subtotal
            </td>
            <td className="font-primary text-lg text-purple-500 font-medium px-4 sm:px-6 py-4">
              <span className="text-lg">5000</span>
            </td>
            <td></td>
          </tr>
          {/* end of sub total */}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
