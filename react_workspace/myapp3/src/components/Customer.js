const Customer = (props) =>{
    return(
        <tr>
                <td>{props.id}</td>
                <td><img src = {props.image} /></td>
                <td>{props.name}</td>
                <td>{props.birthday}</td>
                <td>{props.job} </td>
              </tr>

        // <div>
        //    <CustomerProfile
        //         id = {props.id}
        //         name = {props.name}
        //         image = {props.image} />
        //     <CustomerInfo
        //         birthday = {props.birthday}
        //         job = {props.job} />
        // </div>
    )
}

const CustomerProfile = (props) => {
    return(
        <div>
            <img src = {props.image} alt = "profile" />
            {/* <p>{props.name} {props.id}</p> */}
            <p> id : {props.id} </p>
            <p> name : {props.id} </p>
        </div>
    )
}

const CustomerInfo = (props) => {
    return(
        <div>
            <p>birthday : {props.birthday}</p>
            <p>job : {props.job}</p>
        </div>
    )
}

export default Customer;