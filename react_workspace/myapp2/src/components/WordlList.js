import { useParams } from "react-router-dom";
import data from "../database/words.json";
import Word from "./Word";

const WorldList = () => {
    // const day = 3;
    const {day} = useParams();
    console.log(`(WordList) --> ${day}`);
    let WordlList = data.words.filter((word)=>{
        return (word.day === Number(day));
    });

    return(
        <div>
            <table>
                <tbody>
                    {
                        WordlList.map((word)=>{
                            return (
                                // <tr key = {word.id}>
                                //     <td>{word.eng}</td>
                                //     <td>{word.kor}</td>
                                // </tr>
                                 <Word word = {word} key = {word.id}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default WorldList;