import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { foreground } from "../../constants/styles.js";

export const Container = styled.View`
  flex: 1;
  background: ${foreground};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Balances = styled.View`
  height: 200px;
  width: 100%;
  background: #2b2e32;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  height: auto;
  width: 100%;
  background: ${props => props.theme.body.background};
  padding: 8px;
`;
