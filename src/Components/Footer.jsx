import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logoo.png"

const Footer = () => {
  return (
    <footer className="w-full text-[#FFFFFF] mt-20 px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-2 w-full">
        {/* Left - Contact Info */}
        <div className="bg-[#1B2559] p-6 rounded-2xl flex-[1] min-w-[250px]">
          <img src={logo} alt="DUCO ART" className="w-20" />
          <p className="mb-1">Phone :+91 9873389793</p>
          <p>Email : tradersjalwa@gmail.com</p>
          <p className='font-thin'>
            Address: PLOT NO 701 KH. NO. 80/10, GROUND FLOOR JAIN NAGAR TIRANTHAKAR NAGAR, 
            Karala, North West Delhi, Delhi, Delhi, India,110081
          </p>
        </div>

        {/* Right - Navigation */}
        <div className="bg-[#1B2559] p-6 rounded-2xl flex-[3]">
          <div className="grid grid-cols-1 sm:px-[100px] sm:grid-cols-3 gap-1">
            {/* Shop */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Shop</h3>
              <ul className="space-y-1 text-sm">
                <li>New</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kid</li>
              </ul>
            </div>

            {/* Our Store */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Our Store</h3>
              <ul className="space-y-1 text-sm">
                <li>About</li>
                <li><Link to="/order" className="hover:text-[#E5C870]">My Order</Link></li>
                <li><Link to="/contact" className="hover:text-[#E5C870]">Contact Us</Link></li>
                <li>FAQ</li>
                <li>
                  <a href="mailto:ducoart@12.com" className="hover:text-[#E5C870]">
                    Help and support
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Term & Conditions</h3>
              <ul className="space-y-1 text-sm mb-8">
                <li><Link to="/privacy-policy" className="hover:text-[#E5C870]">Privacy Policy</Link></li>
                <li><Link to="/refund-return-policy" className="hover:text-[#E5C870]">Refund and Cancellation Policy</Link></li>
                <li><Link to="/shipping-policy" className="hover:text-[#E5C870]">Shipping Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="hover:text-[#E5C870]">Terms and Conditions</Link></li>
                <li><Link to="/Refundreturn" className="hover:text-[#E5C870]">Return Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-2 mt-2 min-w-[250px]">
        {/* Footer Text */}
        <div className="bg-[#E5C870] text-center p-4 rounded-2xl flex-[3]">
          <p className="text-black font-medium text-sm">
            © 2025 by Jalwatrading. Powered and secured
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
