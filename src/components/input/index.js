// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports
import { Container, Field, Label, Toggle, Border, Cell, Name } from "./styles";

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
  secureTextEntry,
  toggle,
  ...rest
}) => {
  return (
    <Fragment>
      <Container>
        <Label>{label}</Label>
        {type === "input" && (
          <Field
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            returnKeyType="done"
            keyboardType="decimal-pad"
            secureTextEntry={secureTextEntry}
          />
        )}

        {type === "cell" && (
          <Cell onPress={onPress}>
            <Name>{value.length > 1 ? value : placeholder}</Name>
          </Cell>
        )}

        {type === "toggle" && (
          <Toggle>
            <Name>{value}</Name>
            <Switch value={toggle} onValueChange={onPress} />
          </Toggle>
        )}
      </Container>
      {border === "none" ? null : <Border />}
    </Fragment>
  );
};

export default Input;

/*{type === "description" && (
  <Field
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    returnKeyType="done"
    keyboardType="text
    secureTextEntry={secureTextEntry}
    multiline={true}
    numberOfLines={8}
  />
)}*/
