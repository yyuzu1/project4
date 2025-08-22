//import Button from "./Button";
//import { useNavigate } from "react-router-dom";
import "./XList.css";
import DietItem from "./DietItem";

const DietList = ({ data }) => {
    
    return (
        <div className="XList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <p></p>
                </div>
                <div className="right_col">
                </div>
            </div>
            <div className="list_wrapper">
                {data.length > 0 ? (
                    data.map((it) => <DietItem key={it.id} {...it} />)
                ) : (
                    <div>기록이 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default DietList;