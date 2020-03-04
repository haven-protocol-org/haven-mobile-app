// Library Imports
import React, { Component } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports
import { Container, Field, Label, Border, Cell, Name } from "./styles";

const InputToggle = ({
  type,
  value,
  onChangeText,
  placeholder,
  border,
  label,
  link,
  chooseToken,
  onPress
}) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        {type === "input" && (
          <>
            <Field
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
              returnKeyType="done"
              keyboardType="decimal-pad"
            />
          </>
        )}
        {type === "cell" && (
          <>
            <Cell onPress={onPress}>
              <Name>{value.length > 1 ? value : placeholder}</Name>
            </Cell>
            <Switch onValueChange={onPress} value={true} />
          </>
        )}
      </Container>

      {border === "none" ? null : <Border />}
    </>
  );
};

export default InputToggle;
