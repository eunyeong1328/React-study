import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 > 
                <a href="/" > Day 영단어 </a>
            </h1>
            <div className="menu">
                {/* <a href="#" className="link"> 단어추가</a> */}
                <Link to="/create_word" className="link">
                    단어추가
                </Link>
                
                {/* <a href="#" className="link"> Day 추가</a> */}
                <Link to="/create_day" className="link">
                    Day 추가
                </Link>
            </div>
            <hr />
        </div>
    )
}

export default Header;