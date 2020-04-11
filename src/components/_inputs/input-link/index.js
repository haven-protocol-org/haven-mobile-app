// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports
import { Container, Field, Row, Icon } from "./styles";
import { Value, Label } from "../../../constants/type.js";
import Border from "../../../components/border";

const InputLink = ({ value, label, onPress, border, placeholder }) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
      <Row>
        <Field>
          <Value>{!value ? placeholder : value}</Value>
        </Field>
        <Icon source={require("../../../assets/icon/chevron/chevron.png")} />
      </Row>
      {border ? <Border /> : null}
    </Container>
  );
};

export default InputLink;
