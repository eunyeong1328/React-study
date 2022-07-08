import data from "../database/words.json"

const WorldList = () => {
    const day = 3;
    let WordlList = data.words.filter((word)=>{
        return (word.day === day);
    });

    return(
        <div>
            <table>
                <tbody>
                    {
                        WordlList.map((word)=>{
                            return (
                                <tr key = {word.id}>
                                    <td>{word.eng}</td>
                                    <td>{word.kor}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default WorldList;