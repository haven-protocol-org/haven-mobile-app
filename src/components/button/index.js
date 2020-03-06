// Library Imports
import React from "react";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";

const Button = ({ text }) => {
  return (
    <Container>
      <Wrapper>
        <Label>{text}</Label>
      </Wrapper>
    </Container>
  );
};

export default Button;
