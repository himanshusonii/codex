"use client";

export default function ScheduleSelector({
  schedule,
  onToggle,
}: {
  schedule: any[];
  onToggle: (index: number) => void;
}) {
  return (
    <div className="order-item mb65 course-page-section">
      <div className="section-title-2 headline text-left">
        <h2>
          Schedule <span className="required">*</span>
        </h2>
      </div>
      <div className="course-list-view table-responsive">
        <table className="table">
          <thead>
            <tr className="list-head">
              <th></th>
              <th>Week days</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td>
                  <label className="main">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      disabled={item.disabled}
                      onChange={() => onToggle(index)}
                      className="myinput large"
                    />
                    <span className="checkbox-container"></span>
                  </label>
                </td>
                <td>
                  <div className="course-list-img-text">
                    <div className="course-list-text">
                      <h3>
                        <a href="#">{item.weekDay}</a>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="dlt-price relative-position text-left">
                  {item.time.map((time: any, tIdx: number) => (
                    <p key={tIdx}>
                      {time.from} - {time.to}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
