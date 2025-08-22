// src/pages/Edit.js

import { useContext, useEffect, useState } from "react";
import { XStateContext, XDispatchContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../component/Editor";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { onUpdate, onDelete } = useContext(XDispatchContext);
    const data = useContext(XStateContext);
    const [originData, setOriginData] = useState();

    useEffect(() => {
        if (data.length >= 1) {
            const targetData = data.find((it) => String(it.id) === String(id));
            if (targetData) {
                setOriginData(targetData);
            } else {
                alert("존재하지 않는 기록입니다.");
                navigate('/', { replace: true });
            }
        }
    }, [id, data, navigate]);

    const onSubmit = (date, category, item, kcal) => {
        onUpdate(id, date, category, item, kcal);
        navigate('/', { replace: true });
    };
    
    const onClickDelete = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            onDelete(id);
            navigate('/', { replace: true });
        }
    };

    return (
        <div>
            <h2>기록 수정</h2>
            {originData && (
                <Editor 
                    initData={originData} 
                    onSubmit={onSubmit} 
                    onClickDelete={onClickDelete} 
                />
            )}
        </div>
    );
};

export default Edit;