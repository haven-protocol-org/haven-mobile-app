// Library Imports
import React, { Fragment } from "react";
import { ActivityIndicator } from "react-native";
// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import Border from "../border";

const Button = ({ text, onPress, status }) => {
  return (
    <Fragment>
      <Container>
        <Wrapper onPress={onPress}>
          {status ? <ActivityIndicator size="small" /> : <Label>{text}</Label>}
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Button;
