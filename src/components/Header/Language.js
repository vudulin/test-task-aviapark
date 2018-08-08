import React, { Component } from "react";
import styled from 'styled-components';

const Lang = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LangSelected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: #3D4252;
  border-radius: 100%;
`;

const RuLang = styled.div`
  color: #FFFFFF;
  font-family: Navigo;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: 36px;
  text-align: center;
`;
const EngLang = styled(RuLang)`
  color: #3D4252;
`;

export default class Language extends Component {
  state = {
    ru:true
  }

  toggleLang = () => {
    this.setState({
      ru:!this.state.ru
    })
  }
  
  render() {
    return (
      <Lang>
        <LangSelected>
          <RuLang>РУС</RuLang>
        </LangSelected>
        <EngLang>ENG</EngLang>
      </Lang>
    );
  }
}
