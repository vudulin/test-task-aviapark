import React from "react";
import styled from 'styled-components';
import "../../index.css";

import Language from "./Language";
import Social from "./Social";
import Timer from "./Timer";

import Logo from "../../assets/logotype_dark/svg/logotype_dark.svg";
import Triangle from "../../assets/triangle/svg/triangle.svg";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  margin: 0 100px;  
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.3%;
`
const LangWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 43.35%;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <LangWrapper>
        <Language />
        <Timer />   
      </LangWrapper>
      <TitleWrapper>
        <img src={Logo} width="186px" height="24px" alt="" style={{ }}/>
        <img src={Triangle} width="40px" height="7px" alt="" style={{ position: "relative", top: "21px" }}/>
      </TitleWrapper>
      <Social />
    </HeaderWrapper>
  );
}
