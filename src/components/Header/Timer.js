import React, { Component } from "react";
import styled from 'styled-components';
import "../../index.css";

import Clock from "../../assets/icon_clock_dark/svg/icon_clock_dark.svg";

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  @media (max-width: 750px){
    display: none;
    transition: 0.5s ease-out;
  }
`
const IsOpened = styled.div`
  margin-left: 15px;
  color: #3D4252;
  font-family: Navigo-Bold;
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  text-align: left;
  @media (max-width: 1000px){
    display: none;
  }
`

export default class Timer extends Component {
  render() {
    return (
      <TimerWrapper>
        <img src={Clock} width="36px" height="36px" alt=""/>
        <IsOpened>СЕГОДНЯ ОТКРЫТ ДО 22:00<br/>ВРЕМЯ РАБОТЫ</IsOpened>
      </TimerWrapper>
    );
  }
}
