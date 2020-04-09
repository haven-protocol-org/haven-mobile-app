// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import {
  Container,
  Field,
  Label,
  Toggle,
  Border,
  Clipboard,
  CopyPaste
} from "./styles";

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
  clipboard,
  clipboardLabel,
  ...rest
}) => {
  return (
    <Fragment>
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
        {border ? <Border /> : null}
      </Container>
      {clipboard && (
        <Fragment>
          <Border />
          <Clipboard onPress={onPress}>
            <CopyPaste>{clipboardLabel}</CopyPaste>
          </Clipboard>
        </Fragment>
      )}
    </Fragment>
  );
};

export default InputMultiline;
