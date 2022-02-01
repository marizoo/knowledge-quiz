import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const mainColor = () => {
  return css`
    #0077ff
    `;
};

export const textColor = () => {
  return css`
    #333
    `;
};

export const bgColor = () => {
  return css`
    #FCFCFC
    `;
};

export const bgPanelColor = () => {
  return css`
    #EBEBEB
    `;
};

export const centerAll = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const columnThis = () => {
  return css`
    display: flex;
    flex-direction: column;
  `;
};
