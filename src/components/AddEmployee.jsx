import styles from "./AddEmployee.module.css";

const AddEmployee = ({ formData, setFormData, handleClick }) => {
  console.log(formData);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    setFormData({
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
    }); // optimal resetting og the form
  };

  return (
    <>
      <section className={styles.container}>
        <h2>Add new person</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className="styles.label" htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="styles.label" htmlFor="title">
            Title
          </label>
          <input
            className={styles.input}
            id="title"
            name="title"
            type="text"
            autoComplete="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="salary">
            Salary
          </label>
          <input
            className={styles.input}
            id="salary"
            name="salary"
            type="number"
            autoComplete="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="phone">
            Phone
          </label>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="text"
            autoComplete="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="animal">
            Pet
          </label>
          <input
            className={styles.input}
            id="animal"
            name="animal"
            type="text"
            autoComplete="animal"
            value={formData.animal}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="startDate">
            Start Date
          </label>
          <input
            className={styles.input}
            id="startDate"
            name="startDate"
            type="text"
            autoComplete="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="location">
            Location
          </label>
          <input
            className={styles.input}
            id="location"
            name="location"
            type="text"
            autoComplete="location"
            value={formData.location}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="department">
            Department
          </label>
          <input
            className={styles.input}
            id="department"
            name="department"
            type="text"
            autoComplete="department"
            value={formData.department}
            onChange={handleChange}
          />
          <label className="styles.label" htmlFor="skills">
            Skills
          </label>
          <input
            className={styles.input}
            id="skills"
            name="skills"
            type="array"
            autoComplete="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <button type="submit">Add Employee</button>
          <button
            type="reset"
            onClick={() => {
              setFormData({
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
            }}
          >
            Reset Form
          </button>
        </form>
        <p>Your name is: {formData.name}</p>
        <p>Your title is: {formData.title}</p>
        <p>Your salary is: {formData.salary}</p>
      </section>
    </>
  );
};

export default AddEmployee;
