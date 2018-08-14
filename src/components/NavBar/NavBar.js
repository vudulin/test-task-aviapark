import React, { Component } from "react";
import styled from 'styled-components';

import NavItems from "./NavItems";

import Search from "../../assets/icon_search/svg/icon_search.svg";

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  background-color: #3D4252;
`
const SeacrhMapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  margin-left: 100px;  
`
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 27.3%;
`
const SearchIcon = styled.img`
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid #656C81;
  border-radius: 100%;
  box-sizing: border-box;
`
const ProfileWrapper = styled(SeacrhMapWrapper)`
  justify-content: flex-end;
  width: 20%;
  margin-right: 100px;
  margin-left: 0;
`

const ShowMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 34px;
  border: 2px solid #656C81;
  border-radius: 17px;
  font-family: Navigo-Bold;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
`
const Profile = styled(ShowMap)`
  width: 131px;
  height: 34px;
  border: 2px solid #656C81;
  border-radius: 17px;
`
const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  width: 56%;
  @media (max-width: 1380px){
    justify-content: ${props => props.alignState ? "flex-start" : "flex-end"};
    margin-left: 20px;
    margin-right: 20px;
    overflow: auto;
    transition: 0.5s ease-out;
  }
`
const MessageCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  background-color: #2694F7;
  font-family: Navigo-Bold;
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  border-radius: 100%;
`
export default class NavBar extends Component {
  state = {
    alignStart: true
  }
  
  revealNavBar = () => {
    this.setState(prevState => ({
      alignStart:!prevState.alignStart
    }));
  }

  render() {
    const alignStart = this.state.alignStart
    return (
      <NavBarWrapper>
        <SeacrhMapWrapper>
          <SearchIconWrapper>
            <SearchIcon src={Search} alt="" />
          </SearchIconWrapper>
          <ShowMap>КАРТА</ShowMap>
        </SeacrhMapWrapper>
        <NavItemsWrapper alignState={alignStart} reveal={this.revealNavBar}>
          <NavItems/>
        </NavItemsWrapper>
        <ProfileWrapper>
          <Profile>
            КАБИНЕТ
            <MessageCount>2</MessageCount>
          </Profile>
        </ProfileWrapper>
      </NavBarWrapper>
    );
  }
}
