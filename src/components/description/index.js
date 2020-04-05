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
  Inner
} from "./styles";

const Input = ({
  type,
  value,
  onChangeText,
  placeholder,
  border,
  label,
  link,
  chooseToken,
  onPress,
  secureTextEntry
}) => {
  return (
    <Fragment>
      <Inner>
        <Label>{label}</Label>
        <Container>
          <Field
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            returnKeyType="done"
            secureTextEntry={secureTextEntry}
            multiline={true}
            editable={false}
          />
        </Container>
      </Inner>
    </Fragment>
  );
};

export default Input;
