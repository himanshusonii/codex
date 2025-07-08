"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeCard = () => {
  return (
    <div id="card-element" className="border p-3 rounded-md bg-white">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a",
            },
          },
        }}
      />
    </div>
  );
};

export default StripeCard;
