// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports'
import { Container, Row } from "./styles";
import { Label, Input, Error } from "../../../constants/type.js";
import Border from "../../../components/border";

const InputText = ({
  label,
  value,
  placeholder,
  onChangeText,
  border,
  error,
  secureTextEntry,
  ...rest
}) => {
  return (
    <Container>
      <Row>
        <Label>{label}</Label>
        <Error>{error}</Error>
      </Row>
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
      {border ? <Border /> : null}
    </Container>
  );
};

export default InputText;
