"use client";

import { useEffect } from "react";
import { useState } from "react";

const SelectLocationSection = () => {
    const [locations, setLocations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://o145r4of4g.execute-api.us-east-1.amazonaws.com/dev/location/list")
            .then((res) => res.json())
            .then((data) => {
                setLocations(data.items || []);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load locations");
                setLoading(false);
            });
        if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init();
        }
    }, []);

    const selectLocation = (shortName: string) => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("location") === shortName) return;
            localStorage.setItem("location", shortName);
            window.location.href = "http://54.209.232.211:7000/";
        }
    };

    const getSelectedLocation = (shortName: string) => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("location") === shortName ? "Selected" : "Use Location";
        }
        return "Use Location";
    };

    const getSelectedLocationBtnClass = (shortName: string) => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("location") === shortName ? "btn-danger" : "btn-success";
        }
        return "btn-success";
    };

    return (
        <>
            <section id="latest-area" className="latest-area-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-area-content">
                                <div className="section-title-2 mb65 headline text-left">
                                    <h2>Locations <span></span></h2>
                                </div>
                                {locations.map((location, idx) => (
                                    <div className="latest-events">
                                        <div className="latest-event-item">
                                            <div className="events-date  relative-position text-center">
                                                <div className="gradient-bdr"></div>
                                                <span className="event-date bold-font"><i className="fas fa-map-marker-alt"></i></span>
                                                {location.shortName}
                                            </div>
                                            <div className="event-text">
                                                <h3 className="latest-title bold-font"><a href="#">{location.fullName}</a></h3>
                                                <div className="course-meta">
                                                    <span className="course-category"><a href="#">{location.address}</a></span>
                                                </div>
                                                <div className="course-viewer ul-li" style={{ color: "#fff" }}>
                                                    <button
                                                        className={`btn btn-sm ${getSelectedLocationBtnClass(location.shortName)}`}
                                                        onClick={() => selectLocation(location.shortName)}
                                                    >
                                                        {getSelectedLocation(location.shortName)}
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
        </>
    );
};
export default SelectLocationSection