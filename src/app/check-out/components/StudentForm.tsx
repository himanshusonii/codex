"use client";

export default function StudentForm({
  studentInfo,
  onChange,
}: {
  studentInfo: any;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="order-payment">
      <div className="section-title-2 headline text-left">
        <h2>
          <span>Student</span> Information
        </h2>
      </div>
      <div className="payment-method">
        <div className="payment-info">
          <label htmlFor="student-first-name">
            First Name <span className="required">*</span>
          </label>
          <input
            id="student-first-name"
            type="text"
            className="form-control"
            value={studentInfo.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="student-last-name">
            Last Name <span className="required">*</span>
          </label>
          <input
            id="student-last-name"
            type="text"
            className="form-control"
            value={studentInfo.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </div>
        <div className="payment-info">
          <label htmlFor="student-dob">Date of Birth</label>
          <input
            id="student-dob"
            type="date"
            className="form-control"
            value={studentInfo.dob}
            onChange={(e) => onChange("dob", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
