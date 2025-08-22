// src/component/Editor.js

import './Editor.css';
import { useState, useEffect } from "react";
import { getFormattedDate } from "../util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
<<<<<<< HEAD
import Header from './Header';
=======
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6

const categoryOptionList = [
    { value: "exercise", name: "운동" },
    { value: "diet", name: "식단" },
];

// onClickDelete prop 추가
const Editor = ({ initData, onSubmit, onClickDelete }) => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        category: "exercise",
        item: "",
        kcal: "",
    });

    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    }, [initData]);

    const handlechangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };
<<<<<<< HEAD

=======
    
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
    const handleChangeCategory = (e) => {
        setState({
            ...state,
            category: e.target.value,
        });
    };

    const handlechangeItem = (e) => {
        setState({
            ...state,
            item: e.target.value,
        });
    };

    const handlechangeKcal = (e) => {
        setState({
            ...state,
            kcal: e.target.value.replace(/[^0-9]/g, ""),
        });
    };

    const handleSubmit = () => {
        if (!state.item.trim() || !state.kcal) {
            alert("항목과 열량을 입력해주세요.");
            return;
        }
<<<<<<< HEAD

=======
        
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
        onSubmit(state.date, state.category, state.item, state.kcal);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="Editor">
<<<<<<< HEAD
            <div className="top_section">
                <Header
                    leftChild={
                        <Button
                            text={"취소"}
                            onClick={handleGoBack}
                        />
                    }

                    

                    rightChild={
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                            {onClickDelete && (
                                <Button
                                    text={"삭제하기"}
                                    type={"negative"}
                                    onClick={onClickDelete}
                                />
                            )}
                            <Button
                                text={"저장하기"}
                                type={"positive"}
                                onClick={handleSubmit}
                            />
                        </div>
                    }
                />

                
            </div>

            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                
=======
            <div className="editor_section top_section">
                <Button
                    text={"취소"}
                    onClick={handleGoBack}
                />
                <Button
                    text={"저장하기"}
                    type={"positive"}
                    onClick={handleSubmit}
                />
                {/* onClickDelete가 전달된 경우에만 삭제 버튼 렌더링 */}
                {onClickDelete && (
                    <Button
                        text={"삭제하기"}
                        type={"negative"}
                        onClick={onClickDelete}
                    />
                )}
            </div>
            
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
                    <input
                        type="date"
                        value={state.date}
                        onChange={handlechangeDate}
                    />
<<<<<<< HEAD
               
=======
                </div>
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
            </div>

            <div className="editor_section">
                <h4>분류</h4>
<<<<<<< HEAD
                
=======
                <div className="input_wrapper">
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
                    <select
                        value={state.category}
                        onChange={handleChangeCategory}
                    >
                        {categoryOptionList.map(it => (
                            <option key={it.value} value={it.value}>
                                {it.name}
                            </option>
                        ))}
                    </select>
<<<<<<< HEAD
                
=======
                </div>
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
            </div>

            <div className="editor_section">
                <h4>항목</h4>
<<<<<<< HEAD
                <div className='input_wrapper'>
=======
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
                <input
                    type="text"
                    value={state.item}
                    onChange={handlechangeItem}
                />
            </div>
<<<<<<< HEAD
            </div>
=======
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6

            <div className="editor_section">
                <h4>열량</h4>
                <div className="input_wrapper">
                    <input
                        type="number"
                        value={state.kcal}
                        onChange={handlechangeKcal}
                    />
                    <span> kcal</span>
                </div>
            </div>
        </div>
    );
};

export default Editor;