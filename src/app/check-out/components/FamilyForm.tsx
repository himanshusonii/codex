"use client";

export default function FamilyForm({
  familyInfo,
  onChange,
}: {
  familyInfo: any;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="order-payment">
      <div className="section-title-2 headline text-left">
        <h2>
          <span>Family</span> Information
        </h2>
      </div>
      <div className="payment-method">
        <div className="payment-info">
          <label htmlFor="family-name">
            Name <span className="required">*</span>
          </label>
          <input
            id="family-name"
            type="text"
            className="form-control"
            value={familyInfo.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="family-email">
            Email <span className="required">*</span>
          </label>
          <input
            id="family-email"
            type="text"
            className="form-control"
            value={familyInfo.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="family-address">
            Home Address <span className="required">*</span>
          </label>
          <input
            id="family-address"
            type="text"
            className="form-control"
            value={familyInfo.address}
            onChange={(e) => onChange("address", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="family-city">
            City <span className="required">*</span>
          </label>
          <input
            id="family-city"
            type="text"
            className="form-control"
            value={familyInfo.city}
            onChange={(e) => onChange("city", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="family-state">
            State <span className="required">*</span>
          </label>
          <input
            id="family-state"
            type="text"
            className="form-control"
            value={familyInfo.state}
            onChange={(e) => onChange("state", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="family-zip">
            Zip <span className="required">*</span>
          </label>
          <input
            id="family-zip"
            type="text"
            className="form-control"
            value={familyInfo.zip}
            onChange={(e) => onChange("zip", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
