import React from "react";
import PolicyLayout from "../Components/PolicyLayout";

export default function ShippingPolicy() {
   const year = new Date().getFullYear();
  return (
      <>
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-5 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Shipping Policy</h1>
            <p className="mt-1 text-sm text-gray-500">
              NIKHID SOLUTIONS PRIVATE LIMITED • Website:&nbsp;
              <a
                href="https://nikhidsolutions.store/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                nikhidsolutions.store
              </a>
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-100"
          >
            Print
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-5 py-8">
        <article className="rounded-xl border bg-white p-6 leading-7 text-gray-800">
          <p className="text-lg">
            The orders for the user are shipped through registered domestic courier companies
            and/or speed post only. Orders are shipped within <strong>7 days</strong> from the date
            of the order and/or payment or as per the delivery date agreed at the time of order
            confirmation and delivering of the shipment, subject to courier company / post
            office norms.
          </p>

          <p className="mt-4">
            Platform Owner shall not be liable for any delay in delivery by the courier company /
            postal authority. Delivery of all orders will be made to the address provided by the
            buyer at the time of purchase. Delivery of our services will be confirmed on your
            email ID as specified at the time of registration.
          </p>

          <p className="mt-4">
            If there are any shipping cost(s) levied by the seller or the Platform Owner (as the
            case be), the same is <strong>not refundable</strong>.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-5xl px-5 py-6 text-sm text-gray-500">
          © {year} NIKHID SOLUTIONS PRIVATE LIMITED. All rights reserved.
        </div>
      </footer>
    </div>
</>
  );
}