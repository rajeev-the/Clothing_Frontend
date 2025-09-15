import React, { useState,useEffect } from 'react'
import tshirt from "../assets/gloomy-young-black-model-clean-white-unlabeled-cotton-t-shirt-removebg-preview.png"
import { Link, useParams } from 'react-router-dom'
import { FaFilter } from "react-icons/fa";
import {getproductcategory} from "../Service/APIservice"
import { usePriceContext } from '../ContextAPI/PriceContext';

const SaerchingPage = () => {
const[prodcuts,setProdcuts] = useState([])
const {id,catogory_name} = useParams()
     const { toConvert, priceIncrease  } = usePriceContext();
  
      function calculatePrice(currency, ac, high) {
      const actualPrice = currency*ac
      return  ac;
  
  }

useEffect(() => {
 
  const fetchdata =async()=>{

   const data = await getproductcategory(id);
      if(data){
        setProdcuts(data)
        
      }
      else{
        console.log("No Products is available")
      }
  }
  fetchdata()

}, [id])

console.log(prodcuts)

  return (
   <div className=" text-[] min-h-screen p-4">
      {/* Breadcrumb */}
      

      {/* Heading and product count */}
      <div className="flex  justify-between items-center mb-2">
       <span className="text-[#1B2559] text-2xl">{catogory_name}</span>
        <span className="text-[#02066F] ">120 Products</span>
      </div>
 <hr className="border-t border-3 border-[#1B2559]" />
      {/* Main content */}
      <div className="flex gap-6">
        {/* Filters */}
      

        {/* Right content */}
        <div className="flex-1">
          {/* Bulk order banner */}
        

          {/* Sort bar */}
      
          
          

          {/* Product grid */}
           <div className="grid grid-cols-2 md:grid-cols-2 mt-10 lg:grid-cols-5 gap-6">
    {prodcuts?.map((item) => (
      <Link to={`/products/${item._id}`} key={item} className="border  border-[#1B2559] bg-[#FFFFFF] shadow-md rounded-xl overflow-hidden  hover:shadow-xl transition">
        <div className="relative p-3">
          <img
            src={item.image_url[0]?.url[0]}
            alt="T-Shirt Design"
            className="w-[250px] bg-white  object-cover "
          />
          <div className="absolute top-2 left-2 bg-[#E5C870] text-[#02066F] text-xs px-2 py-1 rounded">Oversized Fit</div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold">{item.products_name}</h3>
    
          <p className=" text-sm font-bold mt-2">₹{calculatePrice(toConvert,item.pricing[0]?.price_per,priceIncrease)}</p>
        </div>
      </Link>
    ))}
  </div>

        </div>
      </div>
    </div>
  )
}

export default SaerchingPage