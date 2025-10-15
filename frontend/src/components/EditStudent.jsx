// EditStudent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";

function EditStudent() {
  const { id } = useParams();
  const token = window.localStorage.getItem("token");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
  });

  useEffect(() => {
    async function fetchStudent(id) {
      try {
        const response = await axiosInstance.get(`students/${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response);
        setName(response.data.name);
        setGrade(response.data.grade);
      } catch (error) {
        console.error(
          "Error fetching student details:",
          error.response.data.message
        );
      }
    }
    fetchStudent(id);
  }, []);

  const handleSubmit = async (e) => {
    try {
      const updatedStudent = { name, grade };
      const response = await axiosInstance.put(
        `/students/${id}`,
        updatedStudent
      );
      console.log(response.data); // handle successful update
    } catch (error) {
      console.error("Update error:", error.response.data.message);
    }
  };

  return (
    <div className="mt-4 box square border ratio ratio-16x9">
      <div className="edit-student-container">
        <h2 className="mt-4 mb-3 mx-auto" style={{ maxWidth: "200px" }}>
          Edit Student
        </h2>
        {id && (
          <form className="row mb-4" onSubmit={handleSubmit}>
            <div className="mt-5">
              <MDBInput
                type="text"
                label="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <MDBInput
                type="text"
                label="Grade"
                className="form-control"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <MDBBtn>
                <MDBIcon>Update</MDBIcon>
              </MDBBtn>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditStudent;