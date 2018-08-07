import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import { Header } from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
  width: 1600px;
  margin: 0 auto;
  background-color: #FFFFFF;
`

export const App = () =>{
  return (
    <Wrapper className="App">
      <Header />
      <NavBar />
      <Content />
      <Services />
      <Footer />
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
