import React, {useState} from 'react';
import { StApp } from './globalStyles/appStyles';
import { Routes, Route } from 'react-router-dom';
import  Login  from './components/login/Login';
import  Welcome  from './components/welcome/Welcome';
import  QuizGeneral  from './components/quizGeneral/QuizGeneral';
import  QuizComputer  from './components/quizComputer/QuizComputer';
import QuizGeography from './components/quizGeography/QuizGeography';

const App = () => {
  const [playerName, setPlayerName] = useState('')

  const handlePlayerName = (newName) => {
    setPlayerName(newName);
  }

  return (
    <div className='app'>
      <Routes>
      
        <Route exact path="/" element={<Login onHandlePlayerName={handlePlayerName} />}/>
        <Route path="/welcome" element={<Welcome playerName={playerName}/>}/>
        <Route path="/general" element={<QuizGeneral />}/>
        <Route path="/computer" element={<QuizComputer />}/>
        <Route path="/geography" element={<QuizGeography />}/>
      
      </Routes>
    </div>
  )
};

export default App;
