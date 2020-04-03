import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.body.background};
`;

export const Button = styled.TouchableOpacity`
  font-size: 16px;
  color: white;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Box = styled.View`
  height: 100px;
  width: 100%;
`;
