const Person = (props) => {
    return (
        <>
            <p>Nimi: {props.name}</p>
            <p>Title: {props.title}</p>
            <p>Salary: {props.salary}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Pet: {props.pet}</p>
        </>
    )
}

export default Person