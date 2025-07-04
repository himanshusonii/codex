"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const LocationContext = createContext<
  | {
      location: Location | null;
      setLocation: (loc: Location) => void;
    }
  | undefined
>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocationState] = useState<Location | null>(null);

  // Set and persist to localStorage
  const setLocation = (loc: Location) => {
    localStorage.setItem("location", JSON.stringify(loc));
    setLocationState(loc);
  };

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("location");
    if (stored) {
      try {
        setLocationState(JSON.parse(stored));
      } catch (err) {
        console.error("Invalid location format in localStorage", err);
      }
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
