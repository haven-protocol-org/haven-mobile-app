// Library Imports
import React from "react";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import Border from "../border";

const Button = ({ text, onPress }) => {
  return (
    <>
      <Border />
      <Container>
        <Wrapper onPress={onPress}>
          <Label>{text}</Label>
        </Wrapper>
      </Container>
      <Border />
    </>
  );
};

export default Button;
