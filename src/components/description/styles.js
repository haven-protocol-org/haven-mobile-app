import styled from "styled-components/native";
import { dark } from "../../constants/themes.js";

const placeholder = `${props => props.theme.type.primary}`;

export const Container = styled.View`
  height: auto;
  border-radius: 2px;
`;

export const Field = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  font-size: 16px;
  color: ${props => props.theme.type.primary};
  border: 1px solid ${props => props.theme.body.border};
  border-radius: 2px;
  padding: 8px;
`;

export const Inner = styled.View`
  padding: 8px 12px;
  /* background: pink; */
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
  padding-bottom: 4px;
`;
