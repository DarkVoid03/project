import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import BASE_URL from "../config.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthController";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { storedToken } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const userDetails = { username, password };
    try {
      const res = await axios.post(`${BASE_URL}/api/login`, userDetails);
      await storedToken(res.data.token);
      navigate("/");
    } catch (e) {
      window.alert("Error in login");
    }
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-dark" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-dark-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <div
                    data-mdb-input-init
                    className="form-outline form-dark mb-4"
                  >
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Username
                    </label>
                  </div>
                  <div
                    data-mdb-input-init
                    className="form-outline form-dark mb-4"
                  >
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="typePasswordX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>
                  <p className="small mb-5 pb-lg-2">
                    <a className="text-dark-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-lg px-5"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg" />
                    </a>
                  </div> */}
                </div>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-grey-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;