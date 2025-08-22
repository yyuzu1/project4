import "./XItem.css"; // XItem.css 재사용
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { XDispatchContext } from "../App";


const DietItem = ({ id, category, item, kcal }) => {
    const navigate = useNavigate();

    const goDetail = () => {
        // App.js에 /diet/:id 경로가 없다면 추가해야 합니다.
        // 현재 라우팅 설정을 기준으로 /diet로 이동하는 예시
        navigate(`/diet/${id}`);
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
            <Button text="삭제" type="negative" onClick={handleDelete} />
        </div>
    );
};

export default DietItem;