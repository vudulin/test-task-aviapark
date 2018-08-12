import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import "./index.css";

import { Header } from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

export const App = () =>{
  return (
    <Wrapper className="App">
      <Header />
      <NavBar />
      <Title />
      <Content />
      <Footer />
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
