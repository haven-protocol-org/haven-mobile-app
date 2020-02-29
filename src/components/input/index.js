// Library Imports
import React, { Component } from "react";
import { TextInput } from "react-native";

// Relative Imports
import { Container, Field, Label, Border } from "./styles";

const Input = ({ value, onChangeText, placeholder }) => {
  return (
    <>
      <Container>
        <Label>Label</Label>
        <Field
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </Container>
      <Border />
    </>
  );
};

export default Input;
