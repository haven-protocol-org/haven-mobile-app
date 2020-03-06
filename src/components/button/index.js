// Library Imports
import React from "react";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import Border from "../border";

const Button = ({ text }) => {
  return (
    <>
      <Border />
      <Container>
        <Wrapper>
          <Label>{text}</Label>
        </Wrapper>
      </Container>
      <Border />
    </>
  );
};

export default Button;
