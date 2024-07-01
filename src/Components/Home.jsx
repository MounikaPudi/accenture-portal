import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/home")
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <h2>Login Details</h2>
      <ul>
        {employee.map((list, index) => (
          <li key={index}>
            {list.name} | {list.emailId} | {list.password}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
