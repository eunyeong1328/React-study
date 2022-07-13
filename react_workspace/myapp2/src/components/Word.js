import { useState } from "react";

const Word = ({word}) => {
    const [isDone, setIsDone] = useState(word.isDone);
    const [isShow, setIsShow] = useState(false);

    const toggleIsDone = () => {
        //setIsDone(!isDone);
        //console.log('Word(isDone) --> ' + isDone);
        fetch("http://localhost:3001/words/"+word.id,
              {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(
                    {...word, isDone:!isDone}
                )
              })
            .then((res)=>{
                if(res.ok){
                    setIsDone(!isDone);
                }
            });

    }
    const toggleIsShow = () => {
        setIsShow(!isShow);
        //console.log('Word(isShow) --> ' + isShow);
    }

    //words Delete 
    const [wordDel, setWordDel] = useState(word);
    const del = () => {
        if(window.confirm("정말 삭제하시겠습니까??")){
            fetch("http://localhost:3001/words/" + word.id,
            {
                method:"DELETE",
            })
            .then( (res)=> {
                if(res.ok){
                    setWordDel({id:0});
                }
            });
        }
    }
    if(wordDel.id === 0){
        return null;
    }

    return (
        <tr className={isDone ? "off":""} >
            <td>
                <input type="checkbox" 
                        checked={isDone}
                        onChange={toggleIsDone} />
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleIsShow}> 
                    뜻 {isShow ? "숨기기":"보기"}
                </button>
                <button onClick={del} className="btn_del">
                    삭제
                </button>
            </td>
        </tr> 
    )
}

export default Word;