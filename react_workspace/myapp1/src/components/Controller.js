const Controller = (props) => {
    return (
        <div>
            <h2> Controller </h2>
            <ul>
                <li>
                    <a href = "/create" 
                            onClick={(e) => {
                                e.preventDefault();
                                props.onChangeMode('Create'); 
                            }}>
                            Create
                    </a>
                </li>
                <li>
                    <a href = "/create" 
                            onClick={(e) => {
                                e.preventDefault();
                                props.onChangeMode('Update'); 
                            }}>
                            Update
                    </a>
                </li>
                <li>
                    <a href = "/create" 
                            onClick={(e) => {
                                e.preventDefault();
                                props.onChangeMode('Delete'); 
                            }}>
                            Delete
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Controller;