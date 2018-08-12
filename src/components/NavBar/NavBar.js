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
  width: 14.29%;
  margin-left: 100px;  
`
const NavItemsWrapper = styled(SeacrhMapWrapper)`
  justify-content: flex-start;
  width: 76.35%;
  margin: 0;
`
const ProfileWrapper = styled(NavItemsWrapper)`
  justify-content: flex-end;
  width: 9.36%;
  margin-right: 100px;
`

const Map = styled.div`
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
const Profile = styled(Map)`
  width: 131px;
  height: 34px;
  border: 2px solid #656C81;
  border-radius: 17px;
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
  render() {
    return (
      <NavBarWrapper>
        <SeacrhMapWrapper>
          <img src={Search} width="36px" height="36px" alt="" style={{ marginRight: "84px", background: "none", border: "1px solid #656C81", borderRadius: "100%", boxSizing: "border-box" }} />
          <Map>КАРТА</Map>
        </SeacrhMapWrapper>
        <NavItemsWrapper>
          <NavItems />
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
