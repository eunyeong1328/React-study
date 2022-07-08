const Controller = (props) => {
    return (
        <div>
            <h2> Controller </h2>
            <ul>
                <li>
                    <a href = "/create" 
                            onClick={(e) => {
                                e.preventDefault();
                                props.onChangeMode('create'); 
                            }}>
                            Create
                    </a>
                </li>
                <li>
                    <a href = "/update" 
                            onClick={(e) => {
                                e.preventDefault();
                                props.onChangeMode('update'); 
                            }}>
                            Update
                    </a>
                </li>
                <li>
                    <a href = "/delete" 
                            onClick={(e) => {
                                e.preventDefault();
                                props.onChangeMode('delete'); 
                            }}>
                            Delete
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Controller;