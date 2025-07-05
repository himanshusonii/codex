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
      location: string | null;
      setLocation: (loc: string) => void;
    }
  | undefined
>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocationState] = useState<string | null>(null);

  const setLocation = (loc: string) => {
    localStorage.setItem("location", loc);
    setLocationState(loc);
  };

  useEffect(() => {
    const stored = localStorage.getItem("location");
    if (stored) {
      setLocationState(stored);
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
