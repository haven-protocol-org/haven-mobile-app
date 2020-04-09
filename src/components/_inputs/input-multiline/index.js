// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import { Container, Field, Clipboard, CopyPaste } from "./styles";
import Border from "../../../components/border";
import { Label, Description } from "../../../constants/type.js";

const InputMultiline = ({
  label,
  value,
  onChangeText,
  placeholder,
  border,
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
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          scrollEnabled={scrollEnabled}
          editable={editable}
          {...rest}
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
