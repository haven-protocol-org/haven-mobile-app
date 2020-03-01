import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";

export const Container = styled.TouchableOpacity`
  height: auto;
  width: 100%;
  padding: 20px;
  background: #2b2e32;
  margin: 8px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  flex-direction: column;
  background: ${props => props.theme.body.foreground};
  border: ${props => props.theme.body.border};
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 17px;
  color: #fff;
  letter-spacing: 0;
  line-height: 21px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #8a8d90;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 4px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
