import styled from "styled-components";
import {
  bgColor,
  bgPanelColor,
  color1,
  textColor,
} from "../../globalStyles/stGlobal";

export const StLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${bgColor};

  form {
    width: 250px;
    border-radius: 20px;
    margin-top: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${bgPanelColor};

    h2 {
      text-align: center;
      margin-bottom: 1rem;
      font-weight: 300;
    }

    input {
      height: 30px;
      width: 90%;
      padding-left: 10px;
      border-radius: 5px;
      border: 0;
      color: grey;
    }

    input:focus {
      outline: ${color1};
    }

    button {
      margin-top: 1.5rem;
      cursor: pointer;
      height: 2rem;
      width: 40%;
      background: ${color1};
      border: 0;
      border-radius: 10px;
      font-weight: 300;
      font-weight: 400;
      color: #333;
    }
  }
`;
