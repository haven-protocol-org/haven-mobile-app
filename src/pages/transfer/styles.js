import styled from "styled-components";
import { View, Text } from "react-native";
import { foreground } from "../../constants/styles.js";

export const Container = styled.View`
  flex: 1;
  background: ${foreground};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Border = styled.View`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.body.border};
`;
