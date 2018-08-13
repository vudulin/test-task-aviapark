import React, { Component } from "react";
import styled from 'styled-components';
import "../../index.css";

const Items = [
  {
    id: 1,
    text: "Магазины"
  },
  {
    id: 2,
    text: "Рестораны"
  },
  {
    id: 3,
    text: "Развлечения"
  },
  {
    id: 4,
    text: "Дети"
  },
  {
    id: 5,
    text: "Услуги"
  },
  {
    id: 6,
    text: "Акции"
  },
  {
    id: 7,
    text: "Новости"
  },
  {
    id: 8,
    text: "Мероприятия"
  },
  {
    id: 9,
    text: "Блог"
  }
]

const NavItemsList = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  width: 56%;
  @media (max-width: 1380px){
    justify-content: ${props => props.alignState ? "flex-end" : "flex-start" };
    margin-left: 20px;
    overflow: hidden;
    transition: 0.5s ease-out;
  }
`
const NavItem = styled.div`
  margin: auto 13px;
  font-family: Navigo-Bold;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  text-transform: uppercase;
  color: #FFFFFF;
`

export default class NavItems extends Component {
  componentDidMount(){
    this.props.reveal();
  }
  render() {
    console.log("alignState",this.props.alignState)
    return (
      <NavItemsList>
        { Items.map(item => 
          <NavItem 
            key={item.id}
          >
            {item.text}
          </NavItem>
        )}
      </NavItemsList>
    );
  }
}