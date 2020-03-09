import styled from "styled-components";
import { View } from "react-native";

export const Container = styled.View`
  display: flex;
  height: auto;
  padding: 12px 16px;
  width: 100%;
`;

export const Tab = styled.View`
  height: 32px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  border: ${props => props.theme.button.primary};
  background: ${props => props.theme.body.background};
  border-radius: ${props => props.theme.styles.radius[1]};
`;

export const Selected = styled.Text`
  font-size: 13px;
  color: ${props => props.theme.type.primary};
`;

export const Deselected = styled.Text`
  font-size: 13px;
  color: ${props => props.theme.type.secondary};
`;

export const Active = styled.TouchableOpacity`
  height: 100%;
  width: 50%%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.button.primary};
`;

export const Inactive = styled.TouchableOpacity`
  height: 100%;
  width: 50%%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.body.background};
`;
