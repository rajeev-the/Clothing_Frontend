import React,{useState,useEffect} from 'react'
import OrderCart from '../Components/OrderCart'
import {  FaShoppingBag } from "react-icons/fa";
import BoxOfProdcuts from '../Components/BoxOfProdcuts';
  import { fetchOrdersByUser } from "../Service/APIservice";







const Order = () => {

  const[order,setOrder] = useState([])
  const [user, setUser] = useState(null);


  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

useEffect(() => {
  const loadOrders = async () => {
    if (!user?._id) return; // prevent running before user loads
    const orders = await fetchOrdersByUser(user._id);
    console.log("User Orders:", orders);
    setOrder(orders.data || orders); // store in state
  };
  loadOrders();
}, [user]);


  const [orderStatus, setOrderStatus] = useState(true);

  return (
  <div className='w-full h-full p-10'>
     
     <div className='mb-7  '> 
       <FaShoppingBag  size={40}  className="text-[#02066F] text-xl cursor-pointer" /> 
      
     </div>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          {order.map((o) => (
    <OrderCart key={o._id} order={o} />
  ))}
                 
                
            
                   </div>


                   <section className="mt-5">
  <div>
    <h3 className="text-start font-bold text-[#02066F] text-2xl">Related Products</h3>

    <div className="mt-5 overflow-x-auto  scrollbar-none [&::-webkit-scrollbar]:hidden">
      <div className="flex  justify-center  items-center gap-4 w-max">
     
     <h1>Not Found</h1>
    
     
      </div>
    </div>
  </div>
</section> 


                 

  </div>
  )
}

export default Order