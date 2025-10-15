import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import BASE_URL from "../config.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card({ data }) {
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const res = await axios.delete(`${BASE_URL}/books/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    window.location.reload();
  };
  const handleEdit = (id) => {
    navigate(`/editbook/${id}`);
  };

  return (
    <div>
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-xs-6">
                  <h2>
                    Manage <b>Books</b>
                  </h2>
                </div>
                <div className="col-xs-6">
                  <a
                    href="/addbook"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i>
                    <span>Add New Book</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((book, index) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.quantity}</td>
                    <td>{book.price}</td>
                    <td>
                      <a
                        onClick={() => handleEdit(book.isbn)}
                        className="edit"
                        data-toggle="modal"
                      >
                        <i>
                          <EditIcon />
                        </i>
                      </a>

                      <a
                        onClick={() => handleDelete(book._id)}
                        className="delete"
                        data-toggle="modal"
                      >
                        <i>
                          <PersonRemoveIcon />
                        </i>
                      </a>
                    </td>
                  </tr>
                ))}

                {/* {data.map((book, index) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td> {book.author}</td>
                    <td> {book.quantity}</td>
                    <td>{book.price}</td>
                    {
                      <td>
                        <a
                          onClick={() => handleEdit(book.isbn)}
                          className="edit"
                          data-toggle="modal"
                        >
                          <i>
                            <EditIcon />
                          </i>
                        </a>

                        <a
                          onClick={() => handleDelete(book._id)}
                          className="delete"
                          data-toggle="modal"
                        >
                          <i>
                            <PersonRemoveIcon />
                          </i>
                        </a>
                      </td>
                    }
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;