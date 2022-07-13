import { useRef } from "react";
import { useHistory } from "react-router-dom";
import UseFetch from "./UseFech";

const  CreateWord = () => {
    const days = UseFetch("http://localhost:3001/days");
    const history = useHistory();    
    
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const onSubmit = (e) => {
        console.log('(CreateWord) onSubmit --> ');
        e.preventDefault();
        fetch("http://localhost:3001/words/",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(
                {
                    day:dayRef.current.value,
                    eng:engRef.current.value,
                    kor:korRef.current.value,
                    isDone:false,
                }
            )
        })
        .then((res)=>{
            if(res.ok){
                alert("단어추가 완료 !! ");
                history.push(`/word/${dayRef.current.value}`)
            }
        });
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label> Eng </label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label> Kor </label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label> Day </label>
                <select ref={dayRef}>
                    {
                        days.map((day) => {
                            return (
                                <option key={day.id} value={day.day}>
                                    {day.day}
                                </option>
                            )
                        })
                    }
                </select>
                <button className="btn">저장 </button> 
            </div>            
            
        </form>
    )
}

export default CreateWord;