import { useState } from "react";

const Word = ({word}) => {
    const [isDone, setIsDone] = useState(word.isDone);
    const [isShow, setIsShow] = useState(false);
    
    const toggleIsDone = () => {
        setIsDone(!isDone);
        console.log('Word(isDone) -->' + isDone );
    }

    const toggleIsShow = () => {
        setIsShow(!isShow);
        console.log('Word(isShow) -->' + isShow );
    }
    return(
          <tr className = {isDone ? "off" : ""}>
            <td>
                <input type = "checkbox"
                    checked={isDone}
                    onChange = {toggleIsDone} />
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
                <button className="btn_del">
                    삭제
                </button>
            </td>
          </tr>

    )
}
export default Word;