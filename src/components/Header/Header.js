import React, { Component } from "react";
import styled from 'styled-components';

import Language from "./Language";
import Timer from "./Timer";
import Social from "./Social";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 100px;  
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <Language />
      <Timer />
      <div>АВИАПАРК</div>
      <Social />
    </HeaderWrapper>
  );
}
