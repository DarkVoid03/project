import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Navbar2() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", null);
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="flex-lg-column container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="flex-lg-column navbar-nav me-auto mb-2 mb-lg-0">
              <div className="justify-content-space-between">
                <div className="group">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Library
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/publish">
                      Publish
                    </a>
                  </li>
                </div>
                <div className="group">
                  &nbsp;{/* add a space between groups */}
                </div>
                <div className="group">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/addbook">
                      Add Book
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/addstudent"
                    >
                      Add Student
                    </a>
                  </li>
                </div>
                <div className="group">
                  &nbsp;{/* add a space between groups */}
                </div>
                <div className="group">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/dashboard"
                    >
                      Dashboards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/reports">
                      Reports
                    </a>
                  </li>
                </div>
                <div className="group">
                  &nbsp;{/* add a space between groups */}
                </div>
                <div className="group">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/setting">
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      onClick={logout}
                    >
                      Logout
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;