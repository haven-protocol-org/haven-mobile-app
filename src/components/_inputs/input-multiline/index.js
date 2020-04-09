// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import { Container, Field, Clipboard, CopyPaste } from "./styles";
import Border from "../../../components/border";
import { Label, Description } from "../../../constants/type.js";

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
        <Description
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
