import React, { Component } from "react";
import styled from 'styled-components';
import "../../index.css";

import icon_stars from '../../assets/icon_stars/svg/icon_stars.svg';
import icon_elevator from '../../assets/icon_elevator/svg/icon_elevator.svg';
import icon_showcase from '../../assets/icon_showcase/svg/icon_showcase.svg';
import icon_radio from '../../assets/icon_radio/svg/icon_radio.svg';
import icon_banner from '../../assets/icon_banner/svg/icon_banner.svg';
import icon_stairs from '../../assets/icon_stairs/svg/icon_stairs.svg';
import icon_facade from '../../assets/icon_facade/svg/icon_facade.svg';
import icon_branding from '../../assets/icon_branding/svg/icon_branding.svg';
import icon_wall from '../../assets/icon_wall/svg/icon_wall.svg';
import icon_food from '../../assets/icon_food/svg/icon_food.svg';
import icon_ad from '../../assets/icon_ad/svg/icon_ad.svg';
import icon_escalator from '../../assets/icon_escalator/svg/icon_escalator.svg';
import icon_column from '../../assets/icon_column/svg/icon_column.svg';
import icon_stop from '../../assets/icon_stop/svg/icon_stop.svg';
import icon_3d from '../../assets/icon_3d/svg/icon_3d.svg';

const ServiceItems = [
  {
    id: 1,
    icon: icon_stars,
    width: "47px",
    height: "48px",
    text: "Проведение промо мероприятий"
  },
  {
    id: 2,
    icon: icon_elevator,
    width: "48px",
    height: "56px",
    text: "Внутренние лифты"
  },
  {
    id: 3,
    icon: icon_showcase,
    width: "56px",
    height: "40px",
    text: "Реклама на витринах"
  },
  {
    id: 4,
    icon: icon_radio,
    width: "56px",
    height: "54px",
    text: "Радиореклама"
  },
  {
    id: 5,
    icon: icon_banner,
    width: "42px",
    height: "56px",
    text: "Подвесные баннеры"
  },
  {
    id: 6,
    icon: icon_stairs,
    width: "56px",
    height: "42px",
    text: "Проведение промо мероприятий"
  },
  {
    id: 7,
    icon: icon_facade,
    width: "56px",
    height: "48px",
    text: "Фасадные Баннеры"
  },
  {
    id: 8,
    icon: icon_branding,
    width: "56px",
    height: "48px",
    text: "Брендирование стен лифта со стороны эскалаторов"
  },
  {
    id: 9,
    icon: icon_wall,
    width: "46px",
    height: "56px",
    text: "Полная лифтовая стена"
  },
  {
    id: 10,
    icon: icon_food,
    width: "56px",
    height: "48px",
    text: "Фуд корт"
  },
  {
    id: 11,
    icon: icon_ad,
    width: "56px",
    height: "56px",
    text: "Брендинг входных групп"
  },
  {
    id: 12,
    icon: icon_escalator,
    width: "56px",
    height: "56px",
    text: "Травалаторы и эскалаторы"
  },
  {
    id: 13,
    icon: icon_column,
    width: "56px",
    height: "54px",
    text: "Брендинг колонн в зоне ресторанного дворика"
  },
  {
    id: 14,
    icon: icon_stop,
    width: "56px",
    height: "48px",
    text: "Остановки"
  },
  {
    id: 15,
    icon: icon_3d,
    width: "56px",
    height: "32px",
    text: "3D-наклейки"
  }
]

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1513px;
  margin: 0 100px;  
`
const ContentText1 = styled.div`
  width: 980px;
  margin-top: 104px;
  font-family: Navigo-Regular;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #3D4252;
`
const ContentText2 = styled(ContentText1)`
  margin-top: 16px;
`

const Bar = styled.div`
  width: 980px;
  height: 1px;
  margin-top: 64px;
  margin-bottom: 64px;
  background-color: #3D4252;
  opacity: 0.1;
  content: ".";
`
const ServiceList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 96px;
`
const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 256px;
`
const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 124px;
  margin-bottom: 26px;
  border: 2px solid #A8F0DE;
  border-radius: 100%;
`
const ServiceText = styled.div`
  width: 248px;
  height: 40px;
  font-family: Navigo-Bold;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #3D4252;
`
const SendRequest = styled.button`
  width: 283px;
  height: 56px;
  margin-bottom: 120px;
  border: 4px solid #A8F0DE;
  border-radius: 28px;
  background-color: #FFFFFF;
  font-family: Navigo-Regular;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #3D4252;
`

export default class Content extends Component{
  render() {
    return (
      <ContentWrapper>
        <ContentText1>
          АВИАПАРК – новый формат шоппинга! Это крупнейший торговый центр в Европе с широким выбором магазинов для всей семьи, т.е. универсальной площадкой для большинства рекламодателей. Уникальное расположение в районе Ходынского поля в непосредственной близости к ТТК обеспечивает легкий доступ как жителям центральных округов, так и близлежащих районов Москвы и области.
        </ContentText1>
        <ContentText2>
          Благодаря ритейл-зонам в торговом центре, разделённым 4 этажами, реклама в ТЦ становится уникальным способом донести ваше рекламное сообщение до ЦА. В торговом центре есть различные рекламные возможности для продвижения нового товара или бренда, увеличения базы данных и повышения лояльности к бренду.
        </ContentText2>
        <Bar></Bar>
        <ServiceList>
          { ServiceItems.map(item => {
            return (
              <ServiceItem 
                key={item.id}
              >
                <Service>
                  <img src={item.icon} alt="" width={item.width} height={item.height}/>
                </Service>
                <ServiceText>{item.text}</ServiceText>
              </ServiceItem>
            )
          })}
        </ServiceList>
        <SendRequest>Отправить заявку</SendRequest>
      </ContentWrapper>
    );
  }
}