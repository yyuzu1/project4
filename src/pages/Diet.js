// src/pages/Diet.js

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { XStateContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";

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
                <div>
                    <h4>항목: {detailData.item}</h4>
                    <h4>열량: {detailData.kcal} kcal</h4>
                    {/* 필요에 따라 기타 상세 정보 추가 */}
                </div>
            )}
        </div>
    );
};

export default Diet;