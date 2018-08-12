import React, { Component } from "react";
import styled from 'styled-components';
import "../../index.css";

const Lang = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 3.43%;
`;

const RuLang = styled(Lang)`
  font-family: Navigo-Bold;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: 36px;
  height: 36px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;
const EngLang = styled(RuLang)`
  color: #3D4252;
`;


export default class Language extends Component{
  state = {
    ru:true
  }
  
  toggleLang = () => {
    this.setState(prevState => ({
      ru:!prevState.ru
    }));
  }
  

  render() {
    const selected = this.state.ru;
    return  (
      <Lang onClick={this.toggleLang}>
        <RuLang style={
          selected ? {
            backgroundColor: "#3D4252", 
            color: "#FFFFFF", 
            borderRadius: "100%"
          } :{
            backgroundColor: "#FFFFFF", 
            color: "#3D4252"
          }}
        >
          РУС
        </RuLang>
        <EngLang style={
          !selected ? {
            backgroundColor: "#3D4252", 
            color: "#FFFFFF", 
            borderRadius: "100%"
          } :{
            backgroundColor: "#FFFFFF", 
            color: "#3D4252"
          }}
        >
          ENG
        </EngLang>
      </Lang>
    );
  }
}
