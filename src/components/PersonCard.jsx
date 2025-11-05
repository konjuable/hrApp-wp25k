// import Skill from "./Skill";

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
          <dd>Recognition: 🎉 Schedule recognition meeting.</dd>
        </>
      );
    }
  };
  const skills = props.skills;
  console.log(skills);

  const Probation = (props) => {
    if (props < 0.5) {
      return (
        <>
          <dd>Probation: 🔔 Schedule probation review.</dd>
        </>
      );
    }
  };

  return (
    <>
      <dl className="employee">
        <dt>Name: {props.name}</dt>
        <dd>Title: {props.title}</dd>
        <dd>Salary: {props.salary}</dd>
        <dd>Phone: {props.phone}</dd>
        <dd>Email: {props.email}</dd>
        <dd>Pet: {props.animal}</dd>
        <dd>Start Date: {props.startDate}</dd>
        <dd>Service Years: {getAge(startingTime)}</dd>
        {Recognition(serviceYears)}
        {Probation(serviceYears)}
        <dd>Location: {props.location}</dd>
        <dd>Department: {props.department}</dd>
        <dd>Skills: {props.skills}</dd>
        {/* <dd>Skills: {skills.map((skill) => (
        <span key={skill}>{skill} </span>
      ))}
      </dd>   */}

        {/* <Skill skills={props.skills} /> */}

      </dl>

    </>
  );
};

export default Person;
