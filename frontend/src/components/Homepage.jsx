import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import { Outlet } from "react-router";
import { useAuth } from "./AuthController";
import { useNavigate, redirect } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  const [loggedIn, setloggedIn] = useState(false);
  const { verifyToken } = useAuth();
  const navigate = useNavigate();
  const res = verifyToken;
  const promise = res().then((a) => {
    if (!a) {
      console.log(`A`, a);
      navigate("/login");
    } else {
      setloggedIn(true);
    }
  });

  return (
    <div>
      {loggedIn && (
        <div className="App container-fluid row">
          <div className="col-lg-2">
            <Navbar2 />
          </div>
          <div className="col-lg-10 col-md-12">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;