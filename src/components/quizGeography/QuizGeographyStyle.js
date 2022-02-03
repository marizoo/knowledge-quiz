import styled from "styled-components";
import { color1 } from "../../globalStyles/stGlobal";

export const StQuizGeography = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .quizContainer {
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .quizQuestionNumber {
      font-weight: 300;
    }

    .quizLine {
      width: 90%;
      height: 3px;
      background: ${color1};
      margin: 1rem 0 0;
    }

    .quizQuestion {
      margin: 1rem 0;
      font-size: 18px;
      font-weight: 800;
      color: #414141;
    }

    .quizButtonContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      cursor: pointer;
      height: 2rem;
      width: 70%;
      background: ${color1};
      border: 0;
      border-radius: 10px;
      font-weight: 300;
      font-weight: 600;
      color: white;
      margin: 0.5rem 0;
      transition: all 0.3s ease;
      padding: 0 4px;
    }

    button:hover {
      background: #45b6b6;
    }

    .showScore {
      margin-bottom: 1rem;
      font-size: 20px;
      font-weight: 300;

      .showScore__number {
        color: ${color1};
        font-weight: 500;
        font-size: 35px;
        margin: 0 3px;
      }
    }

    .buttonStopPlaying {
      background: grey;
    }

    .buttonOtherCat {
      background: #00a2ff;
    }

    .buttonOtherCat:hover {
      background: #45b6b6;
    }
  }
`;
