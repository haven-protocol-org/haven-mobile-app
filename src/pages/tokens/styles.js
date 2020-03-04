import styled from "styled-components";
import { View, Text } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.body.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  height: auto;
  width: 100%;
  background: ${props => props.theme.body.background};
  padding: 8px;
`;
