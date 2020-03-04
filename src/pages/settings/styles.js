import styled from "styled-components";
import { View, Text } from "react-native";
import { foreground } from "../../constants/styles.js";

export const Container = styled.View`
  flex: 1;
  background: ${foreground};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Form = styled.View`
  height: auto;
  width: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;
