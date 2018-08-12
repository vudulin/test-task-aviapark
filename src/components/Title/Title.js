import React, { Component } from "react";
import styled from 'styled-components';
import "../../index.css";

import HeaderBG from "../../assets/header-bg/png/header-bg@2x.png";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 368px;
  background-image: url(${HeaderBG});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
const TitleSmall = styled.div`
  width: 980px;
  font-family: Navigo-Bold;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`
const TitleBig = styled(TitleSmall)`
  font-family: Navigo-Light;
  font-size: 52px;
  font-weight: 300;
  line-height: 78px;
`

export default class Title extends Component {
  render(){
    return (
      <TitleWrapper>
        <TitleSmall>рекламные услуги</TitleSmall>
        <TitleBig>торгового центра</TitleBig>
      </TitleWrapper>
    );
  }
}
