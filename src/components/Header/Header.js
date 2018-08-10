import React from "react";
import styled from 'styled-components';

import Language from "./Language";
import Social from "./Social";
import Clock from "../../assets/icon_clock_dark/svg/icon_clock_dark.svg";
import Logo from "../../assets/logotype_dark/svg/logotype_dark.svg";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 62px;
  margin: 0 100px;  
  background-color: lightyellow;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <Language />
      <img src={Clock} width="36px" height="36px" />
      <img src={Logo} width="186px" height="24px" />
      <Social />
    </HeaderWrapper>
  );
}
