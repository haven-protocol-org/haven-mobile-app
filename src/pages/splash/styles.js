import styled from "styled-components";
import { View, Text } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Brand = styled.Image``;

export const Haven = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`;
