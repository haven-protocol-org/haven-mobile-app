import styled from "styled-components";
import { View, Text } from "react-native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${(props) => props.theme.body.background};
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  height: ${(props) => props.height};
  background: ${(props) => props.theme.body.background};
  padding: 8px;
`;
