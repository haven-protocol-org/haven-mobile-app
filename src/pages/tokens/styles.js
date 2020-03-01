import styled from "styled-components";
import { View, Text } from "react-native";
import { foreground } from "../../constants/styles.js";

export const Container = styled.View`
  flex: 1;
  background: ${foreground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 20px
  color: white;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
  background: red;
`;
