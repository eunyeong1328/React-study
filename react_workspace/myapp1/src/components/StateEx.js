import { useState } from "react";
const StateEx = () =>{
    
    //count 변수가 생성돠고, 초기치는 0
    //count 변수는 setcount의해서만 변경됨.
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick ={() =>{
                setCount(count+1);
            }}>Click me</button>
        </div>

    )
}

export default StateEx;