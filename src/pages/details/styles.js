import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.body.foreground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 20px
  color: white;
`;
