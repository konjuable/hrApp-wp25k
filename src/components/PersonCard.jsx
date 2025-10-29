import Skill from "./Skill";

const Person = (props) => {
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
          <p>Recognition: 🎉 Schedule recognition meeting.</p>
        </>
      );
    }
  };

  const Probation = (props) => {
    if (props < 0.5) {
      return (
        <>
          <p>Probation: 🔔 Schedule probation review.</p>
        </>
      );
    }
  };

  

  return (
    <>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Pet: {props.animal}</p>
      <p>Start Date: {props.startDate}</p>
      <p>Service Years: {getAge(startingTime)}</p>
      {Recognition(serviceYears)}
      {Probation(serviceYears)}
      <p></p>
      <p>Location: {props.location}</p>
      <p>Department: {props.department}</p>
      {/* <p>Skills: {props.skills}</p> */}
      <Skill skills={props.skills} />
      <hr />
    </>
  );
};

export default Person;
