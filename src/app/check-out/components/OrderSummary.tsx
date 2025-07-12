"use client";

export default function OrderSummary({
  selectedMembership,
  signupFee,
  proRatedAmount,
}: {
  selectedMembership: any;
  signupFee: number;
  proRatedAmount: number;
}) {
  const totalDue = Number(signupFee) + Number(proRatedAmount);
  return (
    <div className="payment-method-header">
      <div className="side-bar-widget first-widget">
        <h2 className="widget-title text-capitalize">
          Order <span>Detail</span>
        </h2>
        <div className="sub-total-item">
          <div className="purchase-list mt15 ul-li-block">
            <ul>
              <li>
                Sign-up Fee
                <span>
                  {selectedMembership.unit}
                  {signupFee}
                </span>
              </li>
              {selectedMembership.type?.toLowerCase() !== "workshop" ? (
                <li>
                  1st payment (pro-rated)
                  <span>
                    {selectedMembership.unit}
                    {proRatedAmount}
                  </span>
                </li>
              ) : (
                <li>
                  Workshop Fee ({selectedMembership.name})
                  <span>
                    {selectedMembership.unit}
                    {selectedMembership.cost}
                  </span>
                </li>
              )}
            </ul>
            <div className="in-total">
              Total due today
              <span>
                {selectedMembership.unit}
                {totalDue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
