// EditBook.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";

function EditBook() {
  const token = window.localStorage.getItem("token");
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
  });

  useEffect(() => {
    const fetchBook = async (id) => {
      try {
        const response = await axiosInstance.get(`books/${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setTitle(response.data[0].title);
        setAuthor(response.data[0].author);
        setQuantity(response.data[0].quantity);
        setPrice(response.data[0].price);
      } catch (error) {
        console.error(
          "Error fetching book details:",
          error.response.data.message
        );
      }
    };
    fetchBook(id);
  }, []);

  const handleSubmit = async (id) => {
    try {
      const updatedBook = { title, author, quantity, price };
      const response = await axiosInstance.put(`books/${id}`, updatedBook, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response.data); // handle successful update
    } catch (error) {
      console.error("Update error:", error.response.data.message);
    }
  };

  return (
    <div className="mt-4 box square border ratio ratio-16x9">
      <div className="edit-book-container">
        <h2 className="mt-4 mb-3 mx-auto" style={{ maxWidth: "200px" }}>
          Edit Book
        </h2>
        {id && (
          <form className="row mb-4" onSubmit={handleSubmit}>
            <div class="mt -5">
              <MDBInput
                type="text"
                label="Title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <MDBInput
                type="text"
                label="Author"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <MDBInput
                type="number"
                label="Quantity"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <MDBInput
                type="number"
                label="Price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <button
                onClick={() => handleSubmit(id)}
                type="button"
                class="btn btn-primary"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditBook;