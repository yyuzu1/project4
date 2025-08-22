// src/component/XItem.js
import Button from "./Button";
import "./XItem.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { XDispatchContext } from "../App";

<<<<<<< HEAD
=======

>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
const XItem = ({ id, category, item, kcal }) => {
    const navigate = useNavigate();

    const goDetail = () => {
        // category 값에 따라 다른 URL로 이동
        if (category === 'exercise') {
            navigate(`/exercise/${id}`);
        } else if (category === 'diet') {
            navigate(`/diet/${id}`);
        }
    };

     const { onDelete } = useContext(XDispatchContext);

    const handleDelete = (e) => {
        // 이벤트 버블링 방지
        e.stopPropagation(); 
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            onDelete(id);
        }
    };

    return (
        <div className="XItem" onClick={goDetail}>
            <div className="info_wrapper">
                <div className="item_section">
                    항목: {item} / 열량: {kcal} kcal
                </div>
            </div>
<<<<<<< HEAD
            <Button text="삭제" type="negative" onClick={handleDelete} />
=======
            <Button text={"삭제"} type={"negative"} onClick={handleDelete} />
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
        </div>
    );
};

export default XItem;