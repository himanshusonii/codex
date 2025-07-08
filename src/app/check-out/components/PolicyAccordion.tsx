"use client";

export default function PolicyAccordion({
  policies,
  toggleDetail,
}: {
  policies: any[];
  toggleDetail: (index: number) => void;
}) {
  return (
    <div className="order-item mb65 course-page-section">
      <div className="section-title-2 headline text-left float-left">
        <h2>
          Required <span>Policies</span>
        </h2>
      </div>
      <div className="section-title-2 headline text-left float-right">
        <h2>
          Accept all <span>Policies</span> <span className="required">*</span>
        </h2>
      </div>

      <div className="course-list-view table-responsive">
        <table className="table">
          <thead>
            <tr className="list-head">
              <th></th>
              <th>Policy</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={index}>
                <td style={{ width: "10%" }}>
                  <i
                    className={`fas ${
                      policy.displayDetails ? "fa-minus" : "fa-plus"
                    }`}
                    style={{ fontSize: "x-large", cursor: "pointer" }}
                    onClick={() => toggleDetail(index)}
                  />
                </td>
                <td style={{ width: "25%" }}>
                  <div className="course-list-img-text">
                    <div className="course-list-text">
                      <h3>
                        <a href="#">{policy.name}</a>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="dlt-price relative-position text-left text-sm">
                  {policy.displayDetails && (
                    <p dangerouslySetInnerHTML={{ __html: policy.detail }} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
