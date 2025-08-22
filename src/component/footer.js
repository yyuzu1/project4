import './footer.css';
import React from 'react';

const Footer = ({ totalDietKcal, totalExerciseKcal, filterType }) => {
    // 순수 칼로리 계산
    const finalKcal = totalDietKcal - totalExerciseKcal;

    return (
        <div style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '20px',
            borderTop: '1px solid #ddd'
        }}>
            <h3>총 칼로리</h3>
            {filterType === 'all' && (
                <p>
                    **순수 칼로리: {finalKcal} kcal**
                </p>
            )}
            {filterType === 'diet' && (
                <p>
                    **식단 총 칼로리: {totalDietKcal} kcal**
                </p>
            )}
            {filterType === 'exercise' && (
                <p>
                    **운동 총 칼로리: {totalExerciseKcal} kcal**
                </p>
            )}
        </div>
    );
};

export default Footer;