//import data from "../database/days.json"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";

const DayList = () => {
    // const [count, setCount] = useState(0);
    // const onClick = () => {
    //     setCount(count + 1);
    // } 
    // useEffect(() => {
    //     console.log(`count --> ${count}`);
    // },[]);
    const [days,setDays] = useState([]);

    //처음 렌더링될때, 한번 실행(useEffect((),[]))
    useEffect(() => {
        console.log(`json서버로 부터 (days 데이터 읽어옴)`);
        fetch("http://localhost:3001/days") //값을 가져옴
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setDays(data);
            console.log(`DayList() --> ${data}`);
        })
    },[]);

    return(
        <div>
            {/* <button onClick = {onClick}>{count}</button> */}
            <ul className="list_day">
                {
                 days.map(
                    (day) => {
                        return (
                            <li key = {day.id}>
                                <Link to = {`/word/${day.day}`}>
                                    Day {day.day}
                                </Link>
                            </li>
                        )
                    // return(
                    //     <li key = {day.id}>
                    //         Day {day.day}
                    //     </li>
                    // )
                    })

                }
                <li></li>
            </ul>
        </div>
    )
}

export default DayList;