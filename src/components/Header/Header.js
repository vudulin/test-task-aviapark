import React from "react";
import styled from 'styled-components';

import Language from "./Language";
// import Timer from "./Timer";
import Social from "./Social";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 62px;
  margin: 0 100px;  
`

const Timer = styled.img`
  width: 36px;
  height: 36px;
  z-index:100;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <Language />
      <Timer 
        src="../../assets/icon_clock_dark/svg/icon_clock_dark.svg"
        alt=""
      />
      <div>АВИАПАРК</div>
      <Social />
    </HeaderWrapper>
  );
}
