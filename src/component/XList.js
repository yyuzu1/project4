
//import Button from "./Button";
//import { useNavigate } from "react-router-dom";

import "./XList.css";
import XItem from "./XItem";

const XList = ({ data }) => {
    
    /*const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/new");
    };*/

    return (
        <div className="XList">
            <div className="menu_wrapper">
                {/* 필터 셀렉트 박스 제거 */}
                <div className="left_col">
                    <p></p>
                </div>
                <div className="right_col">
                    
                </div>
            </div>
            <div className="list_wrapper">
                {data.length > 0 ? (
                    data.map((it) => <XItem key={it.id} {...it} />)
                ) : (
                    <div>기록이 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default XList;