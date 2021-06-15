import styled from "styled-components/native";
import { dark } from "../../constants/themes.js";

const placeholder = `${(props) => props.theme.type.primary}`;

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: 4px 12px;
`;

export const Field = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  width: 100%;
  font-size: 18px;
  color: ${(props) => props.theme.type.primary};
  padding: 12px 8px;
  border: 1px solid ${(props) => props.theme.body.border};
  border-radius: 2px;
`;

export const Cell = styled.TouchableOpacity`
  height: 26px;
  width: 100%;
  padding-bottom: 8px;
`;

export const Toggle = styled.View`
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.type.primary};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
  padding-bottom: 4px;
`;

export const Border = styled.View`
  width: 100%;
  background: ${(props) => props.theme.body.border};
  height: 1px;
  margin-left: 12px;
`;
