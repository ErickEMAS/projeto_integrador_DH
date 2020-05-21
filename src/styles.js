import styled, { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import { colors } from "./variables";

import bgImage from "./assets/images/bg.png";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
  }
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    font-family: ${fonts.Roboto};
    background: url(${bgImage}) no-repeat top center ${colors.bgColor};
    background-size: cover;
  }
  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  padding: 0 60px;
`;

export const InternalContainer = styled.div`
  margin-top: 50px;
  padding: 0 30px;
`;

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background: ${colors.light};
  margin: 10px 0 15px 0;
  border-radius: 3px;
`;

export const Button = styled.button`
  background: ${colors.btnBg};
  color: ${colors.light};
  padding: 5px 32px;
  margin: 20px 0 0;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  box-shadow: 0px 1.92354px 2.74791px rgba(30, 30, 30, 0.76),
    0px 4.86478px 6.94968px rgba(30, 30, 30, 0.524386),
    0px 9.92369px 14.1767px rgba(30, 30, 30, 0.422781),
    0px 20.4409px 29.2013px rgba(30, 30, 30, 0.337219),
    0px 56px 80px rgba(30, 30, 30, 0.235614);
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
