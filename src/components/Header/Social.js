import React, { Component } from "react";
import styled from 'styled-components';

import Icon_social_vk from '../../assets/icon_social_vk/svg/icon_social_vk.svg';
import Icon_social_fb from '../../assets/icon_social_fb/svg/icon_social_fb.svg'; 
import icon_social_instagram from '../../assets/icon_social_instagram/svg/icon_social_instagram.svg'; 
import Icon_social_youtube from '../../assets/icon_social_youtube/svg/icon_social_youtube.svg'; 

const socialNets = [
  {
    id: 1,
    iconPath: Icon_social_vk,
    width: "18px",
    height: "10px"
  },
  {
    id: 2,
    iconPath: Icon_social_fb,
    width: "9px",
    height: "16px"
  },
  {
    id: 3,
    iconPath: icon_social_instagram,
    width: "14px",
    height: "14px"
  },
  {
    id: 4,
    iconPath: Icon_social_youtube,
    width: "15px",
    height: "16px"
  }
];
const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SocialItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: auto 3px;
  border: 1px solid #8088A3;
  border-radius: 100%;
  list-style: none;
`

export default class Social extends Component {
  render() {
    return (
      <SocialList>
        { socialNets.map(net => 
          <SocialItem 
            key={net.id}
          >
            <img src={net.iconPath} alt="" width={net.width} height={net.height}/>
          </SocialItem>
        )}
      </SocialList>
    );
  }
}
