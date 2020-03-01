// Library Imports
import React, { Component } from "react";
import { TextInput } from "react-native";

// Relative Imports
import { Container, Field, Label, Border, Cell, Name } from "./styles";
// this.props.navigation.navigate("Tokens")
const Input = ({
  type,
  value,
  onChangeText,
  placeholder,
  border,
  label,
  link,

  onPress
}) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        {type === "input" && (
          <Field
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
          />
        )}
        {type === "cell" && (
          <Cell onPress={onPress}>
            <Name>Name</Name>
          </Cell>
        )}
      </Container>
      {border === "none" ? null : <Border />}
    </>
  );
};

export default Input;
