"use client";
import { useEffect } from "react";

const AOSInit: React.FC = () => {
  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== "undefined" && window.AOS) {
        window.AOS.init();
      } else {
        // Retry after a small delay if AOS is not yet available
        setTimeout(initAOS, 100);
      }
    };
    initAOS();
  }, []);

  return null;
};

export default AOSInit;
