import "./Login.css";
import axios from "axios";
import BASE_URL from "../config.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthController";

function Register() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [isbn, setIsbn] = useState("");
  const navigate = useNavigate();
  const { storedToken } = useAuth();

  const token = localStorage.getItem("token");

  const onSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { name, grade, isbn };
    try {
      const res = await axios.post(
        `${BASE_URL}/students`,
        {
          headers: {
            Authorization: `${token}`,
          },
        },
        userDetails
      );
      console.log(res.data); // handle successful registration
      navigate("/checkout"); // Redirect to login page after registration
    } catch (e) {
      window.alert("Error in registration");
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
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-dark-50 mb-5">
                    Please enter your Name, Grade, and Isbn!
                  </p>
                  <div
                    data-mdb-input-init
                    className="form-outline form-dark mb-4"
                  >
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="typeName"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeName">
                      Name
                    </label>
                  </div>
                  <div
                    data-mdb-input-init
                    className="form-outline form-dark mb-4"
                  >
                    <input
                      type="text"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      id="typeGrade"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeGrade">
                      Grade
                    </label>
                  </div>
                  <div
                    data-mdb-input-init
                    className="form-outline form-dark mb-4"
                  >
                    <input
                      type="text"
                      value={isbn}
                      onChange={(e) => setIsbn(e.target.value)}
                      id="typeIsbn"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeIsbn">
                      Isbn
                    </label>
                  </div>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-lg px-5"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Register
                  </button>
                </div>
                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a href="/login" className="text-grey-50 fw-bold">
                      Login
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

export default Register;