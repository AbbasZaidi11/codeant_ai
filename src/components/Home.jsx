import React from "react";
import Navigation from "./Navigation";
import Repository from "./Repository";
import styled from "styled-components";
const StyledHome = styled.div`
  display: flex;
`;
function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Repository />
    </StyledHome>
  );
}

export default Home;
