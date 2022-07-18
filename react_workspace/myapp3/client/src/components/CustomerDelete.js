import Button from "react-bootstrap/esm/Button";

const CustomerDelete = (props) =>{

    const deleteCustomer = (id) => {
        console.log("deleteCustomer 실행 ");
        const url = "http://localhost:3000/api/customerDelete";
        fetch(url, {
            method: "post",
            headers: {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                id:id
            })
        })
        .then((res) =>{
            if(res.ok){
                alert('삭제가 완료됨!');
            }
        });
    }
    return(
        <>
        <Button type = "submit" variant = "danger" onClick = {()=>{
            deleteCustomer(props.id)}}> 
            삭제
        </Button>

        </>
    )
}

export default CustomerDelete;