
{/*
const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
*/}
const Nav = (props) => {
    const list = props.data.map((content)=>{
        return (
            <li key ={content.id}>
                <a 
                    href = {content.id}
                    //이벤트 객체 안의 
                    data-id={content.id}
                    onClick = { (e) => {
                        e.preventDefault();
                        console.log(e);
                        // console.log(`Nav (id)-> ${content.id}`);
                        //props.onChangePage(content.id);
                        props.onChangePage(e.target.dataset.id);
                    }} 
                >{content.title}
                </a>
            </li>
        )
    })
    return (
        <div>
            <nav>
                <h2>Nav</h2>
                <ul> 
                    {list}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;