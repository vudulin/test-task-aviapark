import React, { Component } from "react";
import styled from 'styled-components';

const Lang = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RuLang = styled(Lang)`
  font-family: Navigo;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: 36px;
  text-align: center;
  cursor: pointer;
`;
const EngLang = styled(RuLang)`
  color: #3D4252;
`;


export default class Language extends Component{
  state = {
    ru:true
  }
  select = {
    width: "36px", 
    height: "36px", 
    backgroundColor: "#3D4252", 
    color: "#FFFFFF", 
    borderRadius: "100%"
  }

  Rus = (
    <Lang>
      <RuLang style={this.select}>РУС</RuLang>
      <EngLang onClick={this.toggleLang}>ENG</EngLang>
    </Lang>
  )

  Eng = (
    <Lang>
      <RuLang onClick={this.toggleLang}>РУС</RuLang>
      <EngLang style={this.select}>ENG</EngLang>
    </Lang>
  )

  toggleLang = () => {
    this.setState(prevState => ({
      ru:!prevState.ru
    }));
  }
  

  render() {
    const selected = this.state.ru;
    console.log(selected);
    return  selected ? this.Rus : this.Eng
  }
}
