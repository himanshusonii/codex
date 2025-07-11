"use client";
import { CardElement } from "@stripe/react-stripe-js";

export default function PaymentSection({ error }: { error: string }) {
  return (
    <div className="order-payment">
      <div className="section-title-2 headline text-left">
        <h2>
          <span>Payment</span> Information <span className="required">*</span>
        </h2>
      </div>
      <div className="payment-method" style={{ width: "min(700px,100%)" }}>
        <div id="card-element">
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </div>
        {error && <div className="mt-3 alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
