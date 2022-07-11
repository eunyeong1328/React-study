import { Link } from "react-router-dom";

const EmptyPage = () => {
    return(
        <div>
            <h2>잘못된 접근입니다. 주소를 확인해주세요.</h2>
            <Link to = {"/"}>홈으로</Link>
        </div>
    )
}

export default EmptyPage;