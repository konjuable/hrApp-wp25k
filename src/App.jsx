import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import employeeData from "./assets/db.json";
// import PersonList from "./components/PersonList";
// import AddEmployee from "./components/AddEmployee";
// import About from "./components/About";

function App() {
  const [employees, setEmployees] = useState(employeeData.employees);
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
    skills: "",
  });

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
        skills: formData.skills.split(", ").map((skill) => skill.trim()),
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
