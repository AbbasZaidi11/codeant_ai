import React from "react";
import styled from "styled-components";
import Metrics from "./Metrics";
import Login from "./Login";
import logo from "../assets/logo.png";

const SigninContainer = styled.div`
  display: flex;
  position: relative;
`;

const SigninHalf = styled.div`
  flex: 1;
`;

const WatermarkLogo = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  width: 284px;
  height: 300px;
  opacity: 0.1;
  z-index: 0;
`;

function Signin() {
  return (
    <SigninContainer>
      <WatermarkLogo src={logo} alt="CodeAnt AI Watermark" />
      <SigninHalf>
        <Metrics />
      </SigninHalf>
      <SigninHalf>
        <Login />
      </SigninHalf>
    </SigninContainer>
  );
}

export default Signin;
