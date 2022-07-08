const Header = () => {
    return(
        <div>
            <h2 className = "header">
                <a href ="/">Day 영단어</a>
            </h2>
            <div className="menu">
                <a href = "#" className="link">단어추가</a>
                <a href = "#" className="link">Day 추가</a>
            </div>
            <hr />
        </div>
    )
}

export default Header;