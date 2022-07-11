import data from "../database/days.json"
import {Link} from "react-router-dom"

const DayList = () => {
    return(
        <div>
            <ul className="list_day">
                {
                 data.days.map(
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