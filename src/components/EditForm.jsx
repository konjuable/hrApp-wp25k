const EditForm = (props) => {
    return (
        <>
            <h2>Edit Fields</h2>
            <form className="form">
                <label htmlFor="name" className="label">
                    <input 
                        className="input"
                        id="name"
                        name="name"
                        type="text"
                        value={props.name}
                    />
                </label>
            </form>
        </>
    )
}

export default EditForm