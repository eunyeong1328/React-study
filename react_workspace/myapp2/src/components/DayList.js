import { getByDisplayValue } from "@testing-library/react";
import data from "../database/days.json"
const DayList = () => {
    return(
        <div>
            <ul className="list_day">
                { data.days.map(
                    (day) => {
                    return(
                        <li key = {day.id}>
                            Day {day.day}
                        </li>
                    )
                    })

                }
                <li></li>
            </ul>
        </div>
    )
}

export default DayList;