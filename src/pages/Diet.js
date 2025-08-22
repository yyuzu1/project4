// src/pages/Diet.js
<<<<<<< HEAD

=======
import './Diet.css';
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { XStateContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
<<<<<<< HEAD
=======
import { getFormattedDate } from '../util';
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6

const Diet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const data = useContext(XStateContext);
    const [detailData, setDetailData] = useState();

    useEffect(() => {
        if (data.length >= 1) {
            const targetData = data.find(
                (it) => String(it.id) === String(id)
            );
            if (targetData && targetData.category === 'diet') {
                setDetailData(targetData);
            } else {
                alert("존재하지 않는 식단 기록입니다.");
                navigate("/", { replace: true });
            }
        }
    }, [data, id, navigate]);

    // 수정 페이지로 이동
    const onGoEdit = () => {
        navigate(`/edit/${id}`);
    };

    return (
        <div>
            <Header
                title={"식단 기록 상세"}
                leftChild={<Button text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
                rightChild={<Button text={"수정하기"} onClick={onGoEdit} />}
            />
            {detailData && (
<<<<<<< HEAD
                <div>
                    <h4>항목: {detailData.item}</h4>
                    <h4>열량: {detailData.kcal} kcal</h4>
                    {/* 필요에 따라 기타 상세 정보 추가 */}
                </div>
=======
                <div className="Diet">
                    <div className='date_section'>
                        <div className='date'>{getFormattedDate(new Date(parseInt(detailData.date)))}</div>
                    </div>
                    <div className='detailData'>
                        <h4>항목</h4>
                        <p>{detailData.item}</p>
                        <h4>열량</h4>
                        <p>{detailData.kcal} kcal</p>
                    {/* 필요에 따라 기타 상세 정보 추가 */}
                </div>
                </div>
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
            )}
        </div>
    );
};

export default Diet;