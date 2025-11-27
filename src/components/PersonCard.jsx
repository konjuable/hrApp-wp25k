// import Skill from "./Skill";
import EditForm from "./EditForm";
import { useState } from "react";
import axios from "axios"
import { _patch } from "../hooks/useAxios";

const Person = (props) => {
  console.log(props.skills)
  let startingTime = props.startDate;
  console.log(startingTime);

  // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd/7091965#7091965
  const getAge = (startingTime) =>
    Math.floor((new Date() - new Date(startingTime).getTime()) / 3.15576e10);

  console.log(getAge(startingTime));

  let serviceYears = getAge(startingTime);
  console.log(serviceYears);

  const Recognition = (props) => {
    if (props % 5 === 0 && props != 0) {
      return (
        <>
          <dd>Recognition: 🎉 Schedule recognition meeting.</dd>
        </>
      );
    }
  };
  // const skills =  props.skills.join(", ")
  // console.log(skills);

  const Probation = (props) => {
    if (props < 0.5) {
      return (
        <>
          <dd>Probation: 🔔 Schedule probation review.</dd>
        </>
      );
    }
  };

  // kenttien arvojen muokkaaminen
  const salary = props.salary
  const location = props.location
  const department = props.department
  const skills = props.skills
  const id = props.id

  // kenttien arvojen muokkaaminen

  const [isEditing, setIsEditing] = useState(false)
  const [person, setPerson] = useState({ salary, location, department, skills })

  
const update = (url = "http://localhost:3001", body = {}, headers = {}) =>
  _patch(url, body, { headers })

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPerson((prevState) => ({ ...prevState, [name]: value }));
    };  

    const handleEdit = () => {
      update(`http://localhost:3001/employees/${id}`, person);
    };
  
    const renderEditableField = (value, name) => {
      const capitalizeWords = (text) =>
        text
          .toString()
          .replace(
            /\w\S*/g,
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
  
      const displayValue = value ? capitalizeWords(value) : "N/A";
      const displayName = name ? capitalizeWords(name) : "N/A";
  
      return isEditing ? (
        <input value={value || ""} name={name} onChange={handleInputChange} />
      ) : (
        <dd>{displayName}: {displayValue}</dd>
      );
    };
  

  return (
    <>
      <dl className="employee">
        <dt>Name: {props.name}</dt>
        {Recognition(serviceYears)}
        {Probation(serviceYears)}
        <dd>Title: {props.title}</dd>
        <dd>Phone: {props.phone}</dd>
        <dd>Email: {props.email}</dd>
        <dd>Pet: {props.animal}</dd>
        <dd>Start Date: {props.startDate}</dd>
        <dd>Service Years: {getAge(startingTime)}</dd>
        {/* <dd>Salary: {props.salary}</dd>
        <dd>Location: {props.location}</dd>
        <dd>Department: {props.department}</dd>
        <dd>Skills: {props.skills}</dd> */}
        {renderEditableField(person.salary, "salary")}
        {renderEditableField(person.location, "location")}
        {renderEditableField(person.department, "department")}
        {renderEditableField(person.skills, "skills")}


        {/* <dd>Skills: {props.skills.join(", ")}</dd> */}
        {/* <dd>Skills: {skills.map((skill) => (
        <span key={skill}>{skill} </span>
      ))}
      </dd>   */}
        {/* <Skill skills={props.skills} /> */}
        <button
          onClick={() => {
            if (isEditing) handleEdit()
            setIsEditing((prev) => !prev)
          }}>
          {isEditing ? "Save" : "Edit"}
          </button> 
      </dl>

    </>
  );
};

export default Person;
