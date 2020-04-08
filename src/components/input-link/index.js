// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports
import {
  Container,
  Field,
  Label,
  Toggle,
  Border,
  Cell,
  Name,
  Icon,
  Input,
  Row
} from "./styles";

const InputLink = ({ value, label, onPress, border }) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
      <Row>
        <Field>
          <Input>{value}</Input>
        </Field>
        <Icon source={require("../../assets/icon/chevron/chevron.png")} />
      </Row>
      {border ? <Border /> : null}
    </Container>
  );
};

export default InputLink;
