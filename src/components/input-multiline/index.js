// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports
import { Container, Field, Label, Toggle, Border, Cell, Name } from "./styles";

const InputMultiline = ({
  type,
  value,
  onChangeText,
  placeholder,
  border,
  label,
  link,
  chooseToken,
  onPress,
  secureTextEntry,
  toggle,
  editable,
  scrollEnabled,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Field
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        returnKeyType="done"
        secureTextEntry={secureTextEntry}
        multiline={true}
        scrollEnabled={scrollEnabled}
        editable={editable}
      />
      <Border />
    </Container>
  );
};

export default InputMultiline;
