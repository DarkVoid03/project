// AddBook.jsx
import React, { useState } from "react";
import axios from "axios";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";

function AddBook() {
  const token = window.localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isbn, setIsbn] = useState("");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const newBook = { title, author, quantity, price, isbn };
      const response = await axiosInstance.post(
        `/books`,
        {
          headers: {
            Authorization: `${token}`,
          },
        },
        newBook
      );
      console.log(response.data); // handle successful creation
      // Reset form fields after successful creation
      setTitle("");
      setAuthor("");
      setQuantity(0);
      setPrice(0);
      setIsbn("");
    } catch (error) {
      console.error("Creation error:", error.response.data.message);
    }
  };

  return (
    <div className="mt-4 box square border ratio ratio-16x9">
      <div className="add-book-container">
        <h2 className="mt-4 mb-3 mx-auto" style={{ maxWidth: "200px" }}>
          Add Book
        </h2>
        <form className="row mb-4" onSubmit={handleSubmit}>
          <div className="mt-5">
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
            <MDBInput
              type="text"
              label="Isbn"
              className="form-control"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <MDBBtn type="submit">
              <MDBIcon>Add</MDBIcon>
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;