import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${props => props.theme.body.foreground};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Overview = styled.View`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: 600;
`;
