import React from 'react';
import {useNavigate} from 'react-router-dom'
const Welcome = ({playerName}) => {
    const navigate = useNavigate();

  return (
      <div className='welcome'>
          <div className='welcome__title'> welcome {playerName}</div>
         <div className='welcome__subtitle'>Pick a Category</div>
         <button className='welcome__button' onClick={() => navigate('/general')}>General Knowledge</button>
      </div>
  )};

  export default Welcome;
