import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StQuizGeneral } from './QuizGeneralStyle';

const QuizGeneral = () => {
  const [datas, setDatas] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  const navigate = useNavigate();

  const URL = 'http://localhost:8000/generalKnowledgeOne';
  const getDatas = async () => {
    const response = await fetch(URL);
    const quiz = await response.json();
    setDatas(quiz);
  };

   // to get the datas
	useEffect(() => {
		getDatas()
	},[]);


  // handle the answer button
  const handleAnswerButton = (isCorrect) => {
    if(isCorrect === true) { setScore(score + 1) }

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < datas.length) {
      setCurrentQuestion(nextQuestion)
    } else { setShowScore(true) }
  }

  // refresh page
  const refreshPage = () => {
    window.location.reload(false);
  }
 
 

  return (
    // <div>
    //   {datas && datas.length>0 && (
    //     <p>{datas[2].questionText}</p>
    //   )}
    // </div>
      <StQuizGeneral>
        <div className='quizContainer'>
          {datas && !showScore && (
            <>
              <p className='quizQuestionNumber'>Question {currentQuestion + 1} / {datas.length}.</p>
              <span className='quizLine'></span>
              <p className='quizQuestion'>{datas[currentQuestion].questionText}</p>
              <div className='quizButtonContainer'>
                {datas[currentQuestion].answerOptions.map(option => (
                  <button onClick={()=>handleAnswerButton(option.isCorrect)}>{option.answerText}</button>
                ))}
              </div>
            </>
          ) }

           {showScore && (
             <>
              <div className='showScore'>You scored <span className='showScore__number'>{score}</span>/{datas.length}</div>
              <button onClick={refreshPage}>Play Again</button>
              <button className='buttonStopPlaying' onClick={() =>navigate('/') }>Stop Playing</button>
             </>
          )}

        </div>
        
      </StQuizGeneral>
  )
};

export default QuizGeneral;
