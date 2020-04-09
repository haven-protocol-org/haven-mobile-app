import styled from "styled-components";
import { dark } from "../../constants/themes.js";

const placeholder = `${props => props.theme.type.primary}`;

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: 4px 12px 0px 12px;
  background: ${props => props.theme.body.foreground};
  display: flex;
  align-items: flex-start;
`;

export const Field = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  width: 100%;
  font-size: 16px;
  color: ${props => props.theme.type.primary};
  padding-bottom: 8px;
`;
