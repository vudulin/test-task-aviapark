import React, { Component } from "react";
import styled from 'styled-components';
import "../../index.css";

import Logo from "../../assets/logotype_white/svg/logotype_white.svg";
import Clock from "../../assets/icon_clock_white/svg/icon_clock_white.svg";
import Arrow from "../../assets/icon_arrow-right/svg/icon_arrow-right.svg";
import Phone from "../../assets/icon_phone/svg/icon_phone.svg";

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #3D4252;
`
const FooterDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: center; 
  width: 87.5%;
  margin-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.10000000149011612);
  content: ".";
  @media (max-width: 750px){
    flex-direction: column;
  }
`
const Bar = styled.div`
  width: 1px;
  height: 118px;
  margin-top: 32px;
  background-color: rgba(255, 255, 255, 0.10000000149011612);
  content: ".";
  @media (max-width: 750px){
    width: 118px;
    height: 1px;
    margin: 10px 0;
  }
`
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2px;
  margin-top: 32px;
  margin-right: 44px;
  @media (max-width: 750px){
    justify-content: center;
    margin: 10px 0;
    padding: 0;
  }
`
const ContactsText = styled.div`
  margin-bottom: 16px;
  font-family: Navigo-Bold;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
`
const Rules = styled(ContactsText)`
  margin: 0;
  color: #A8F0DE;
`
const WorkingHoursWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  margin-left: 44px;
  margin-right: 45px;
  @media (max-width: 750px){
    margin: 10px 0;
    padding: 0;
  }
`
const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 750px){
    flex-direction: row;
  }
`
const WorkingHoursText1 = styled.div`
  margin-bottom: 4px;
  font-family: Navigo-Bold;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
  @media (max-width: 750px){
    margin: 0 10px
  }
`
const WorkingHoursText2 = styled(WorkingHoursText1)`
  margin-bottom: 0;
`
const SendNewsWrapper = styled(WorkingHours)`
  margin: 62px 45px 0;
  @media (max-width: 750px){
    flex-direction: column;
    margin: 10px 0
  }
`
const SendNewsText = styled.div`
  margin-bottom: 4px;
  font-family: Navigo-Bold;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
`
const SendNewsInput = styled.input`
  width: 200px;
  height: 36px;
  padding-left: 16px;
  border: 2px solid #656C81;
  border-radius: 19px;
  background-color: #3D4252;
  box-sizing: border-box;
  ::placeholder{ 
    font-family: Navigo-Bold;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    opacity: 0.5;
    text-align: left;
    color: #FFFFFF;
  }
`
const SendEmailIcon = styled.div`
  position: relative;
  top: -36px;
  right: -81px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #A8F0DE;
  border-radius: 19px;
`
const FooterNavItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 39px 45px 0;
  @media (max-width: 750px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    padding: 0;
  }
`
const FooterNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Navigo-Bold;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 22px;
  text-align: left;
  color: #FFFFFF !important;
  list-style: none;
  text-transform: uppercase;
  a{
    text-decoration: none;
    color: #FFFFFF !important;
  }
  @media (max-width: 750px){
    margin: 0 10px;
  }
`
const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-left: 45px;
  @media (max-width: 750px){
    margin: 0;
  }
`
const FeedbackPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const FeedbackPhoneText = styled.div`
  margin-left: 8px;
  font-family: Navigo-Regular;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
`
const FeedbackButton = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 188px;
  height: 34px;
  background-color: #3D4252;
  border: 2px solid #FFFFFF;
  border-radius: 19px;
  font-family: Navigo=Bold;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
`
const FooterNavItems = [
  {
    id: 1,
    text: "АРЕНДАТОРАМ"
  },
  {
    id: 2,
    text: "ЗАКУПКИ"
  },
  {
    id: 3,
    text: "ВАКАНСИИ"
  },
  {
    id: 4,
    text: "РЕКЛАМНЫЕ УСЛУГИ"
  },
  {
    id: 5,
    text: "КОНТАКТЫ"
  }
]

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterDataWrapper>
          <Contacts>
            <img src={Logo} alt="" style={{ width: "167px", height: "22px", margin: "15px 0px 16px 0px" }} />
            <ContactsText>Наш адрес: г. Москва, ул. Ходынский бульвар, д.4<br/>Тел.: +7 (495) 644-45-44</ContactsText>
            <Rules>Правила ТЦ АВИАПАРК</Rules>
          </Contacts>
          <Bar></Bar>
          <WorkingHoursWrapper>
            <img src={Clock} alt="" width="36px" height="36px"/>
            <WorkingHours>
              <WorkingHoursText1>ПН - ЧТ + ВС<br/>10:00 - 22:00</WorkingHoursText1>
              <WorkingHoursText2>ПТ - СБ<br/>10:00 - 23:00</WorkingHoursText2>
            </WorkingHours>
          </WorkingHoursWrapper>
          <Bar></Bar>
          <SendNewsWrapper>
            <SendNewsText>ПОЛУЧАТЬ НОВОСТИ</SendNewsText>
            <SendNewsInput type="text" placeholder="E-MAIL"></SendNewsInput>
            <SendEmailIcon>
              <img src={Arrow} alt="" width="10px" height="16px"/>
            </SendEmailIcon>
          </SendNewsWrapper>
          <Bar></Bar>
          <FooterNavItemsList>
            { FooterNavItems.map(item => 
              <FooterNavItem
                key={item.id}
              >
                <a href="/">{item.text}</a>
              </FooterNavItem>
            )}
          </FooterNavItemsList>
          <Bar></Bar>
          <Feedback>
            <FeedbackPhone>
              <img src={Phone} alt="" width="16px" height="16px" />
              <FeedbackPhoneText>+7 (495) 644 45 44</FeedbackPhoneText>
            </FeedbackPhone>
            <FeedbackButton>ОБРАТНАЯ СВЯЗЬ</FeedbackButton>
          </Feedback>
        </FooterDataWrapper>
      </FooterWrapper>
    );
  }
}
