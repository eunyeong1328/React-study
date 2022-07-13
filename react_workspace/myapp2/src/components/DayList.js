import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import data from "../database/days.json"
import UseFetch from "./UseFech";

const DayList = () => {
    // const [days, setDays] = useState([]);    
    // //처음 렌더링될때, 한번 실행 (useEffect((),[]))
    // useEffect(() => {
    //     console.log('json 서버로 부터 (days 데이터 읽어옴)');
    //     fetch("http://localhost:3001/days")
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then( (data) => {
    //         setDays(data);   
    //         //console.log(data);      
    //     })        
    // }, []);

    const days = UseFetch("http://localhost:3001/days");
    return (
        <div>
            <ul className="list_day">
                { //data.days.map((day)=>{
                  days.map((day)=>{
                    return (
                        <li key={day.id}>
                            <Link to={`/word/${day.day}`}>
                                Day {day.day}
                            </Link>
                        </li>
                        // <li key={day.id}>
                        //     Day {day.day}
                        // </li>
                    )
                })
                }
            </ul>
        </div>
    )
}
export default DayList;