const Header = (props) => {
    return (
        <div>
            <header>
            {/* <h1>WEB</h1>
             World Wide Web!! */}
            {/* <h1>{props.title}</h1>
            {props.sub} */}
            <h2>
                <a href="#"
                    onClick = {(e) => {
                        // e.preventDefault(); 
                        props.onChangePage();
                    }}>{props.title}</a>
                 
            </h2>
             {props.sub}
            </header>
        </div>
    )
}

export default Header;