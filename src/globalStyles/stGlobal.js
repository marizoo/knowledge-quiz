import { css } from "styled-components";

export const stMobile = (props) => {
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

export const color1 = () => {
  return css`
    salmon
    `;
};

export const color2 = () => {
  return css`
    green
    `;
};

export const color3 = () => {
  return css`
    purple
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
