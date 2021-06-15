import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.body.background};
  padding-top: 20px;
`;

export const Border = styled.View`
  background: ${props => props.theme.input.input_border_focus}
  height: 1px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  font-size: 16px;
  color: white;
`;

export const Link = styled.Text`
  font-size: 14px;
  color: white;
  margin-left: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.type.secondary};
`;

export const Microcopy = styled.View`
  /* background: ${props => props.theme.body.foreground}; */
  padding: 8px 12px;
  width: 100%;
`;

export const Footer = styled.TouchableOpacity`
  background: ${props => props.theme.body.foreground};
  padding: 12px 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
