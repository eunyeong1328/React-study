
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
const Nav2 = (props) => {
    const list = props.data.map((content)=>{
        return (
            <li key ={content.id}>
                <a 
                    href = {content.id}
                    onClick = { (e) => {
                        e.preventDefault();
                        console.log(`Nav (id)-> ${e.target.data.id}`);
                        props.onChangePage(e.target.data.id);
                    }} 
                >{content.title}
                </a>
            </li>
        )
    })
    return (
        <div>
            <nav>
                <ul> 
                    {list}
                </ul>
            </nav>
        </div>
    )
}

export default Nav2;