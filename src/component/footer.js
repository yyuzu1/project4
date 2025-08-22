import './footer.css';
import React from 'react';

const Footer = ({ totalDietKcal, totalExerciseKcal, filterType }) => {
    // 순수 칼로리 계산
    const finalKcal = totalDietKcal - totalExerciseKcal;

    return (
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
            )}
        </div>
    );
};

export default Footer;