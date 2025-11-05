import styles from "./PersonList.module.css"
import PersonCard from "./PersonCard"

const PersonList = ({employees}) => {
    console.log(employees)
    return (
        <>
            <section className={styles.employeeList}>
                {employees.map(empleyee =>
                    <PersonCard 
                        key={empleyee.id}
                        {...empleyee}
                        // name={empleyee.name}
                        // title={empleyee.title}
                        // salary={empleyee.salary}
                        // phone={empleyee.phone}
                        // email={empleyee.email}
                        // animal={empleyee.animal}
                        // startDate={empleyee.startDate}
                        // location={empleyee.location}
                        // department={empleyee.department}
                        // skills={empleyee.skills}
                    />
                )}
            </section>
        </>
    )
}

export default PersonList