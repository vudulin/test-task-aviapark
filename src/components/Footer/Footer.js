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
  height: 215px;
  background-color: #3D4252;
`
const FooterDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  width: 87.5%;
  margin-top: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.10000000149011612);
  content: ".";
`
const Bar = styled.div`
  width: 1px;
  height: 118px;
  margin: 0 44px;
  background-color: rgba(255, 255, 255, 0.10000000149011612);
  content: ".";
`
const BarNew = styled(Bar)`
  margin: 0 45px;
`
const Contacts = styled.div`
  padding-left: 2px;
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
`
const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`
const WorkingHoursText1 = styled.div`
  margin-bottom: 4px;
  font-family: Navigo-Bold;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
`
const WorkingHoursText2 = styled(WorkingHoursText1)`
  margin-bottom: 0;
`
const SendNewsWrapper = styled(WorkingHours)`
  margin-top: 30px;
  margin-left: 0;
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
`
const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
          <BarNew></BarNew>
          <SendNewsWrapper>
            <SendNewsText>ПОЛУЧАТЬ НОВОСТИ</SendNewsText>
            <SendNewsInput type="text" placeholder="E-MAIL"></SendNewsInput>
            <SendEmailIcon>
              <img src={Arrow} alt="" width="10px" height="16px"/>
            </SendEmailIcon>
          </SendNewsWrapper>
          <BarNew></BarNew>
          <FooterNavItemsList>
            { FooterNavItems.map(item => 
              <FooterNavItem
                key={item.id}
              >
                <a href="/">{item.text}</a>
              </FooterNavItem>
            )}
          </FooterNavItemsList>
          <BarNew></BarNew>
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
