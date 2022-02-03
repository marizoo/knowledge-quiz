import styled from "styled-components";
import { color1 } from "../../globalStyles/stGlobal";

export const StWelcome = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .welcome__container {
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    h2 {
      font-weight: 300;
      margin-bottom: 1rem;
    }

    span {
      font-weight: 300;
      margin-bottom: 1rem;
    }

    button {
      cursor: pointer;
      height: 2rem;
      width: 70%;
      background: ${color1};
      border: 0;
      border-radius: 10px;
      font-weight: 300;
      font-weight: 400;
      color: white;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
    }

    button:hover {
      background: #45b6b6;
    }

    .logoutButton {
      background: grey;

      &:hover {
        background: #45b6b6;
      }
    }
  }
`;
