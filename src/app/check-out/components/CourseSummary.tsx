"use client";
import Image from "next/image";

export default function CourseSummary({ course }: { course: any }) {
  if (!course) return null;

  return (
    <div className="order-item mb65 course-page-section">
      <div className="section-title-2 headline text-left">
        <h2 className="float-left">
          Course <span>Enrollment.</span>
        </h2>
        <h2 className="float-right text-danger">
          <span className="required">*</span> Denotes required field
        </h2>
      </div>
      <div className="course-list-view table-responsive">
        <table className="table">
          <thead>
            <tr className="list-head">
              <th>COURSE NAME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="course-list-img-text">
                  <div className="course-list-img">
                    <Image
                      src={course.thumbnailImage}
                      alt="Course Image"
                      width={180}
                      height={100}
                    />
                  </div>
                  <div className="course-list-text">
                    <h3>{course.courseName}</h3>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
