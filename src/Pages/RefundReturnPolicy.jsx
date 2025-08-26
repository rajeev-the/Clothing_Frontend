import React from "react";
import PolicyLayout from "../Components/PolicyLayout";

export default function RefundReturnPolicy() {
   const year = new Date().getFullYear();
  return (
     <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-5 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Jalwa Trading Pvt Ltd • Website:&nbsp;
              <a
                href="https://jalwatrading.store/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
               jalwatrading.store
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
            This refund and cancellation policy outlines how you can cancel or
            seek a refund for a product / service purchased through the Platform.
            Under this policy:
          </p>

          <ol className="mt-5 list-decimal pl-6 space-y-4">
            <li>
              Cancellations will only be considered if the request is made{" "}
              <strong>within 7 days</strong> of placing the order. However,
              cancellation requests may not be entertained if the orders have
              been communicated to the seller(s)/merchant(s) listed on the
              Platform and they have initiated shipping, or the product is out
              for delivery. In such an event, you may choose to reject the
              product at the doorstep.
            </li>

            <li>
              <strong>Jalwa Trading Pvt Ltd</strong> does not accept
              cancellation requests for perishable items like flowers, eatables,
              etc. However, a refund/replacement can be made if the user
              establishes that the quality of the product delivered is not good.
            </li>

            <li>
              In case of receipt of damaged or defective items, please report to
              our customer service team. The request will be entertained once
              the seller/merchant listed on the Platform has checked and
              determined the same at its end. This should be reported{" "}
              <strong>within 7 days</strong> of receipt of products. If you feel
              that the product received is not as shown on the site or as per
              your expectations, you must bring it to our notice{" "}
              <strong>within 7 days</strong> of receiving the product. After
              reviewing your complaint, customer service will take an
              appropriate decision.
            </li>

            <li>
              For complaints regarding products that come with a manufacturer’s
              warranty, please refer the issue directly to the manufacturer as
              per their policy.
            </li>

            <li>
              In case any refund is approved by{" "}
              <strong>Jalwa Trading Pvt Ltd</strong>, it will take{" "}
              <strong>up to 7 days</strong> for the refund to be processed to
              you.
            </li>
          </ol>

          {/* Optional contact block */}
          <div className="mt-8 rounded-lg bg-gray-50 p-4 border">
            <h2 className="font-semibold">Need help?</h2>
            <p className="text-sm text-gray-700">
              Please contact our support team using the details provided on the
              Platform. Share your order ID and any supporting photos/videos for
              faster resolution.
            </p>
          </div>
        </article>
      </main>
      
          
      

      {/* Content */}
      <main className="mx-auto max-w-5xl px-5 py-8">
          <h1 className="text-2xl font-bold tracking-tight">Return Policy</h1>
        <article className="rounded-xl border bg-white p-6 leading-7 text-gray-800">
          <p className="text-lg">
            We offer refund / exchange within the first <strong>7 days</strong> from the date of your purchase.
            If <strong>7 days</strong> have passed since your purchase, you will not be offered a return,
            exchange, or refund of any kind. In order to become eligible for a return or an exchange:
          </p>

          <ol className="mt-4 list-[lower-roman] pl-6 space-y-2">
            <li>The purchased item should be unused and in the same condition as you received it,</li>
            <li>The item must have original packaging,</li>
            <li>
              If the item was purchased on a sale, it may not be eligible for a return / exchange. Only such
              items are replaced by us (based on an exchange request) if they are found defective or damaged.
            </li>
          </ol>

          <p className="mt-6">
            You agree that there may be certain categories of products / items that are exempted from returns
            or refunds. Such categories will be identified to you at the time of purchase. For exchange / return
            accepted request(s) (as applicable), once your returned product / item is received and inspected by
            us, we will send you an email to notify you about receipt of the returned / exchanged product.
          </p>

          <p className="mt-3">
            If the same has been approved after the quality check at our end, your request (i.e. return /
            exchange) will be processed in accordance with our policies.
          </p>
        </article>
      </main>

      {/* Footer */}
     
  

      {/* Footer */}
    
    </div>
  );
}
