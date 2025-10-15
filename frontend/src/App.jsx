import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";
import RentalList from "./components/RentalList";
import HomePage from "./components/Homepage";
import EditBook from "./components/EditBook";
import Navbar2 from "./components/Navbar2";
import Login from "./components/Login";
import Register from "./components/Register";
import Library from "./components/Library";
import Checkout from "./components/Checkout";
import ShowNavbar from "./ShowNabar";
import AuthController from "./components/AuthController";
function App() {
  return (
    <Router>
      <div className="App container-fluid row">
        {/* <div className="col-lg-2 col-md-12"> */}
        {/* <ShowNavbar>
            <Navbar2 />
          </ShowNavbar> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<Library />} />
            <Route path="addbook" element={<AddBook />} />
            <Route path="books" element={<BookList />} />
            <Route path="students" element={<StudentList />} />
            <Route path="editstudent/:id" element={<EditStudent />} />
            <Route path="rentals" element={<RentalList />} />
            <Route path="editbook/:id" element={<EditBook />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>

        {/* <div className="col-lg-10 col-md-12"> */}
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;