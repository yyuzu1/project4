import './footer.css';
import React from 'react';

const Footer = ({ totalDietKcal, totalExerciseKcal, filterType }) => {
    // 순수 칼로리 계산
    const finalKcal = totalDietKcal - totalExerciseKcal;

    return (
<<<<<<< HEAD
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
=======
        <div className='Footer'>
            {filterType === 'all' && (
                <div>
                   <h3>순수 칼로리</h3>
                   <p>{finalKcal} kcal</p>
                </div>
            )}
            {filterType === 'diet' && (
               <div>
                   <h3>총 섭취 칼로리(식단)</h3>
                   <p>{totalDietKcal} kcal</p>
                </div>
            )}
            {filterType === 'exercise' && (
              <div>
                   <h3>총 소모 칼로리(운동)</h3>
                   <p>{totalExerciseKcal} kcal</p>
                </div>
>>>>>>> f9f252a847d369f500e32fcd4e844884d8d706a6
            )}
        </div>
    );
};

export default Footer;