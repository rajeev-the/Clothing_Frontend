import React from "react";
import PolicyLayout from "../Components/PolicyLayout";

export default function ShippingPolicy() {
   const year = new Date().getFullYear();
  return (
       <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>

      <p className="mb-4">
        The orders for the user are shipped through registered domestic courier
        companies and/or speed post only.
      </p>
       <p className="mb-4">
       The product will be delivered to your location within 6-7 days.
      </p>


      <p className="mb-4">
        Orders are shipped within <strong>7 days</strong> from the date of the
        order and/or payment or as per the delivery date agreed at the time of
        order confirmation and delivering of the shipment, subject to courier
        company/post office norms.
      </p>

      <p className="mb-4">
        Platform Owner shall not be liable for any delay in delivery by the
        courier company/postal authority.
      </p>

      <p className="mb-4">
        Delivery of all orders will be made to the address provided by the buyer
        at the time of purchase. Delivery of our services will be confirmed on
        your email ID as specified at the time of registration.
      </p>

      <p className="mb-4">
        If there are any shipping cost(s) levied by the seller or the Platform
        Owner (as the case be), the same is <strong>not refundable</strong>.
      </p>
    </div>

     
     
  );
}