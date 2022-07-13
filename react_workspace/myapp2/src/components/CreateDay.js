import { useHistory } from "react-router-dom";
import UseFetch from "./UseFech";

const CreateDay = () => {
    const days = UseFetch("http://localhost:3001/days");
    const history = useHistory();

    const addDay = () => {
        console.log(`(CreateDay) : addDay (days)-> ${days.length}`);
        fetch("http://localhost:3001/days/", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                day : days.length+1,
            }),
        }).then((res) => {
            if(res.ok){
                alert("Day가 추가완료 되었습니다.!!");
                history.push("/"); //메인으로 이동
            }
        }
        ) 
    }
    return (
        <div className="input_day">
            <h2> CreateDay </h2>
            <h2>현재 일수 {days.length}일</h2>
            <button className = "btn" onClick={addDay}> Day 추가 </button>
        </div>
    )
}

export default CreateDay;