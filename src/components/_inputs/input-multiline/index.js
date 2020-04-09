// Library Imports
import React, { Fragment } from "react";

// Relative Imports
import { Container, Wrapper, CopyPaste } from "./styles";
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
  onPress,
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
          editable={editable}
          multiline={true}
          {...rest}
        />
        {border && <Border />}
      </Container>

      {clipboard && (
        <Fragment>
          <Border />
          <Wrapper onPress={onPress}>
            <CopyPaste>{clipboardLabel}</CopyPaste>
          </Wrapper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default InputMultiline;
