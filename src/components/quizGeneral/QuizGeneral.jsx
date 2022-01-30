import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className='quizGeneral'>
        <div className='quizGeneral__card'>
          {datas && !showScore && (
            <>
              <p>Question {currentQuestion + 1} / {datas.length}.</p>
              <p>{datas[currentQuestion].questionText}</p>
              <p>
                {datas[currentQuestion].answerOptions.map(option => (
                  <button onClick={()=>handleAnswerButton(option.isCorrect)}>{option.answerText}</button>
                ))}
              </p>
            </>
          ) }

           {showScore && (
             <>
              <div>You scored {score}/{datas.length}</div>
              <button onClick={refreshPage}>Play Again</button>
              <button onClick={() =>navigate('/') }>Stop Playing</button>
             </>
          )}

        </div>
        
      </div>
  )
};

export default QuizGeneral;
