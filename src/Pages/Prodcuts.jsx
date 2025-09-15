import React,{useState,useEffect} from 'react';
import tshirt from "../assets/gloomy-young-black-model-clean-white-unlabeled-cotton-t-shirt-removebg-preview.png";
import { Link } from 'react-router-dom';
import { FaFilter } from "react-icons/fa";
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';


import { getproducts } from "../Service/APIservice";


const Prodcuts = () => {
  const items = [1, 2, 3, 4, 5, 6];
    const [products, setProdcuts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigator = useNavigate();
  
    useEffect(() => {
      const getdata = async () => {
        setLoading(true);
        const data = await getproducts();
        if (data) {
          setProdcuts(data);
        } else {
          console.log("Data is not Present in Products Calling");
        }
        setLoading(false);
      };
      getdata();
    }, []);
  

  return (
    <div className="bg-white min-h-screen p-4 md:p-6">
      {/* Heading and product count */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#1B2559]">Traders jalwa</h1>
        <span className="text-[#02066F]">120 Products</span>
      </div>

      {/* Main content */}
      <div className="flex gap-6">
        {/* Filters */}
      

        {/* Right content */}
        <div className="flex-1">
          {/* Bulk order banner */}
          <div className="bg-[#1B2559] text-white p-6 rounded-xl mb-6 relative border border-[#02066F]">
            <h2 className="text-xl font-bold mb-2">
              Enquire about <span className="text-[#E5C870]">Bulk Orders</span> at
            </h2>
            <div className="bg-white text-[#02066F] inline-block px-4 py-2 rounded text-sm font-mono border border-[#1B2559]">
              business@.com
            </div>
            <p className="text-sm mt-2 text-[#E5EAF6]">
              *Min. 30 units order | Grab exciting deals & offers
            </p>
          </div>

         

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products?.map((item) => (
  <Link
    to={`/products/${item._id}`}
    key={item._id}   // ✅ unique key from MongoDB ID
    className="border border-[#1B2559] bg-[#FFFFFF] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
    id={item._id}    // ✅ attach product id
  >
    <div className="relative p-3 grid place-items-center">
      <img
        src={item.image_url?.[0]?.url?.[0] || tshirt}   // ✅ fallback image
        alt={item.products_name}
        className="w-full h-48 object-contain bg-white"
      />
      <div className="absolute top-2 left-2 bg-[#E5C870] text-[#02066F] text-xs px-2 py-1 rounded">
          Premium fit
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-[#1B2559]">
        {item.products_name}
      </h3>
      <p className="text-xs text-[#1B2559]/70">
        {item.Desciptions?.[0] || "Your design, your style"}
      </p>
      <p className="text-sm font-bold mt-2 text-[#02066F]">
        ₹{item.pricing?.[0]?.price_per || 0}
      </p>
    </div>
  </Link>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodcuts;
