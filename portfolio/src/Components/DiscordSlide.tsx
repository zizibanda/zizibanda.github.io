import * as React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;  
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 10px;
  padding-left: 30%;
`;

const DiscordSlide = () => (
  <SContainer>
    <STextWrapper>
      <h1>
        Discord Bot Placeholder
      </h1>
      <p>
        Add Discord Bot Links here 
      </p>
    </STextWrapper>
  </SContainer>
);

export default DiscordSlide;