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
  font-size: 16px;
  color: ${props => props.theme.type.primary};
  padding-bottom: 8px;
  line-height: 20px;
  min-height: 90px;
`;

export const Border = styled.View`
  background: ${props => props.theme.body.border};
  width: 100%;
  height: 1px;
`;

export const Clipboard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.body.foreground};
`;

export const Toggle = styled.View`
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CopyPaste = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.type.secondary};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
  padding-bottom: 0px;
`;
