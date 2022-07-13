import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import data from "../database/words.json"
import Word from "./Word";
import UseFetch from "./UseFech";


const WordList = () => {
    //const day = 3;
    const {day} = useParams();
    console.log(`(WordList) day --> ${day}`);
    
    // let WordList = data.words.filter((word)=>{
    //     return (word.day === Number(day));
    // });    
    // const [wordList, setWordList] = useState([]);    
    // useEffect(() => {
    //     console.log('json server에서 데이터 읽음 !!');
    //     fetch("http://localhost:3001/words?day="+day)
    //     .then((res)=> {
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         setWordList(data);
    //     })
    // },[day]);
    const wordList = UseFetch("http://localhost:3001/words?day="+day);
    return (
        <div>
            <h2> Day {day} </h2>
            <table>
                <tbody>
                    {
                        // WordList.map((word)=>{
                        wordList.map((word)=>{    
                            return(
                                // <tr key={word.id}>
                                //     <td>{word.eng}</td>
                                //     <td>{word.kor}</td>
                                // </tr>
                                <Word word={word} key={word.id} />

                            )
                            
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default WordList;