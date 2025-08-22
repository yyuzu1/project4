// src/pages/Home.js

import { useContext, useState, useEffect } from "react";
import { XStateContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import DietList from "../component/DietList";
import XList from "../component/XList";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";


const filterOptionList = [
    { value: "all", name: "전체" },
    { value: "diet", name: "식단" },
    { value: "exercise", name: "운동" },
];
    

const Home = () => {
    const data = useContext(XStateContext);
    const [piviotDate, setPivotDate] = useState(new Date());
    const [exerciseData, setExerciseData] = useState([]);
    const [dietData, setDietData] = useState([]);
    const [filterType, setFilterType] = useState("all"); // 필터 타입 상태

    const headerTitle = `${piviotDate.getFullYear()}년 ${piviotDate.getMonth() + 1}월 ${piviotDate.getDate()}일`;

    const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/new");
    };

    useEffect(() => {
        if (data.length >= 1) {
            const beginTimeStamp = new Date(
                piviotDate.getFullYear(),
                piviotDate.getMonth(),
                piviotDate.getDate()
            ).getTime();
            const endTimeStamp = new Date(
                piviotDate.getFullYear(),
                piviotDate.getMonth(),
                piviotDate.getDate(),
                23, 59, 59, 999
            ).getTime();

            const dailyData = data.filter(
                (it) => it.date >= beginTimeStamp && it.date <= endTimeStamp
            );
            
            // 카테고리별로 데이터 분리
            setExerciseData(dailyData.filter(item => item.category === 'exercise'));
            setDietData(dailyData.filter(item => item.category === 'diet'));
        } else {
            setExerciseData([]);
            setDietData([]);
        }
    }, [data, piviotDate]);

    const onIncreaseDay = () => {
        setPivotDate(new Date(piviotDate.getFullYear(), piviotDate.getMonth(), piviotDate.getDate() + 1));
    };

    const onDecreaseDay = () => {
        setPivotDate(new Date(piviotDate.getFullYear(), piviotDate.getMonth(), piviotDate.getDate() - 1));
    };
    
    // 필터 변경 핸들러
    const onChangeFilterType = (e) => {
        setFilterType(e.target.value);
    };

    // 칼로리 계산 로직
    const totalDietKcal = dietData.reduce((acc, cur) => acc + Number(cur.kcal), 0);
    const totalExerciseKcal = exerciseData.reduce((acc, cur) => acc + Number(cur.kcal), 0);


    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseDay} />}
                rightChild={<Button text={">"} onClick={onIncreaseDay} />}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
                <select value={filterType} onChange={onChangeFilterType}>
                    {filterOptionList.map((it, idx) => (
                        <option key={idx} value={it.value}>
                            {it.name}
                        </option>
                    ))}
                </select>
                <Button type="positive" text={"새 기록"} onClick={onClickNew} />
                        
            </div>
            
            {/* 조건부 렌더링 */}
            {filterType === 'all' && (
                <>
                    <h2>식단 기록</h2>
                    <DietList data={dietData} />
                    <h2>운동 기록</h2>
                    <XList data={exerciseData} />
                </>
            )}
          
            {filterType === 'diet' && (
                <>
                    <h2>식단 기록</h2>
                    <DietList data={dietData} />
                </>
            )}

            {filterType === 'exercise' && (
                <>
                    <h2>운동 기록</h2>
                    <XList data={exerciseData} />
                </>
            )}

            {/* Footer 컴포넌트 렌더링 및 props 전달 */}
            <Footer
                totalDietKcal={totalDietKcal}
                totalExerciseKcal={totalExerciseKcal}
                filterType={filterType}
            />

        </div>
    );
};

export default Home;
