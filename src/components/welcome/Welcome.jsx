import React from 'react';
import {useNavigate} from 'react-router-dom';
import { StWelcome } from './welcomeStyle';


const Welcome = ({playerName}) => {
    const navigate = useNavigate();

  return (
      <StWelcome>
          <div className='welcome__container'>
            <h2> Welcome, {playerName}</h2>
            <span>Pick a Category</span>
            <button onClick={() => navigate('/general')}>General Knowledge</button>
            <button onClick={() => navigate('/computer')}>Computer</button>
            <button onClick={() => navigate('/geography')}>Geography</button>
            <button className='logoutButton' onClick={() => navigate('/')}>Log Out</button>
         </div>
      </StWelcome>
  )};

  export default Welcome;
