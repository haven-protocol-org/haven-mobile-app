import styled from "styled-components";
import { View, Text } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: papayawhip;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;
