import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config.js";
import Card from "./Card";
import Card2 from "./Card2";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const book = await axios.get(`${BASE_URL}/books`);
      setBooks(book);
      console.log(`Book`, book.data);
      const student = await axios.get(`${BASE_URL}/students`);
      setStudents(student);
    };
    fetch();
  }, []);
  return (
    <div>
      <div>
        <div className="container-fluid">
          <section className="overflow-auto mb-10 h-45 section-1">
            <Card data={books.data} />
          </section>
          <section className="overflow-auto h-45 section-2">
            <Card2 data={students.data} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;