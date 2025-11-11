import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios"

import Header from "./components/Header";
import Footer from "./components/Footer";
// import employeeData from "../db.json";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: [],
  });

  const hook = () => {
    console.log("effect")
    axios
      .get("http://localhost:3001/employees")
      .then(response => {
        console.log("promise fullfilled")
        setEmployees(response.data)
      })
  }

  useEffect(hook, [])
  console.log("render", employees.length, "employees")


  useEffect(() => {
    console.log("effect")
    axios
      .get("http://localhost:3001/employees")
      .then(response => {
        console.log("promise fullfilled")
        setEmployees(response.data)
      })
  }, [])
  console.log("render", employees.length, "employees")

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: formData.name,
        title: formData.title,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        startDate: formData.startDate,
        location: formData.location,
        department: formData.department,
        // skills: formData.skills,
        skills: [formData.skills.split(", ").map((skill) => skill.trim())],
      },
    ]);
  };

  return (
    <>
      <Header 
        formData={formData}
        setFormData={setFormData}
        handleClick={handleClick}
        employees={employees} 
        setEmployees={setEmployees}
      />
      {/* <PersonList employees={employees} />
      <AddEmployee
        formData={formData}
        setFormData={setFormData}
        handleClick={handleClick}
      /> */}
      <Footer />
    </>
  );
}

export default App;
