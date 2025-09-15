import QuantityControlss from "./QuantityControlss";
import PriceDisplay from "./PriceDisplay";
import { RiEyeFill } from "react-icons/ri";
import { useState } from "react";
import { usePriceContext } from '../ContextAPI/PriceContext';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const [previewImage, setPreviewImage] = useState(null);
     const { toConvert, priceIncrease  } = usePriceContext();

    const navigator = useNavigate();
  
      function calculatePrice(currency, ac, high) {
      const actualPrice = currency*ac
      return  actualPrice + (actualPrice * (high / 100));
  
  }

  return (
    <div className="border-b  border-gray-800 pb-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
        {/* Product Image */}
        <div className="w-full sm:w-32 h-32 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
          <img
            src={item.image_url[0]?.url[0]}
            alt={item.type}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-1 text-[#1B2559]">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <h2 className="text-lg sm:text-xl font-semibold">{item.products_name}</h2>
            <PriceDisplay
              price={item.price}
              className="text-base sm:text-lg font-bold text-[#FDC305]"
            />
          </div>

          <div className="text-sm text-[#1B2559]">{item.description}</div>
           <div className="flex flex-wrap gap-1">
  {Object.entries(item.quantity).map(([size, count]) =>
    count > 0 ? (
      <span key={size} className="px-1 py-0.5  text-sm rounded border">
        {size} × {count}
      </span>
    ) : null
  )}
</div>

            <div className="flex gap-4 mt-2 flex-wrap text-sm text-[#1B2559]">
           
            <p className="flex items-center">
              <span className="text-[#1B2559] font-medium mr-1">Color:</span>
              <span
                className="inline-block w-4 h-4 rounded-full border border-[#1B2559]"
                style={{ backgroundColor: item.color }}
              ></span>
            </p>
            <p><span className="text-[#1B2559] font-medium">Gender:</span> {item?.gender}</p>
           

          </div>
         

          <div className="flex flex-wrap items-center gap-3 mt-2">
            {/* Quantity Controls */}
           

            {/* Design Preview */}
            <button
              onClick={() => navigator(`/products/${item.id}`)}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#E5C870] text-black text-sm rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              <RiEyeFill size={18} />
              Preview
            </button>

            {/* Remove Button */}
            <button
              onClick={removeFromCart}
              className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 text-sm rounded-md hover:bg-red-100 transition"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M4 7h16m-4 0V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>




    </div>
  );
};

export default CartItem;
