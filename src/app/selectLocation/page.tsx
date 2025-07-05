"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { useLocation } from "@/lib/LocationContext";
import { useRouter } from "next/navigation";

const SelectLocationSection = () => {
  const router = useRouter();
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { location, setLocation } = useLocation();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get("location/list");
        setLocations(res.data.items || []);
      } catch (err) {
        setError("Failed to load locations");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();

    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }
  }, []);

  const handleSelect = (shortName: string) => {
    if (location === shortName) return;
    setLocation(shortName);
    router.push("/");
  };

  const isSelected = (shortName: string) => location === shortName;

  return (
    <section id="latest-area" className="latest-area-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="latest-area-content">
              <div className="section-title-2 mb65 headline text-left">
                <h2>
                  Locations <span></span>
                </h2>
              </div>

              {loading && <p>Loading...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}

              {locations.map((loc, idx) => (
                <div key={idx} className="latest-events">
                  <div className="latest-event-item">
                    <div className="events-date relative-position text-center">
                      <div className="gradient-bdr"></div>
                      <span className="event-date bold-font">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      {loc.shortName}
                    </div>

                    <div className="event-text">
                      <h3 className="latest-title bold-font">
                        <a href="#">{loc.fullName}</a>
                      </h3>
                      <div className="course-meta">
                        <span className="course-category">
                          <a href="#">{loc.address}</a>
                        </span>
                      </div>

                      <div
                        className="course-viewer ul-li"
                        style={{ color: "#fff" }}
                      >
                        <button
                          className={`btn btn-sm ${
                            isSelected(loc.shortName)
                              ? "btn-danger"
                              : "btn-success"
                          }`}
                          onClick={() => handleSelect(loc.shortName)}
                        >
                          {isSelected(loc.shortName)
                            ? "Selected"
                            : "Use Location"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectLocationSection;
