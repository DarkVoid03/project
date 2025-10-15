import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar2 from "./components/Navbar2";

function ShowNabar({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
}

export default ShowNabar;