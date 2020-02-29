import styled from "styled-components";
import { dark } from "../../constants/themes.js";

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: 4px 12px;
`;

export const Field = styled.TextInput`
  height: 26px;
  width: 100%;
  color: ${props => props.theme.type.primary};
`;

export const Label = styled.Text`
  font-size: 13px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
  padding-bottom: 4px;
`;

export const Border = styled.View`
  width: 100%;
  background: ${dark.body.border};
  height: 1px;
  margin-left: 12px;
`;
