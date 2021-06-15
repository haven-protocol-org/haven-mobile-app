import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.body.background}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

export const Form = styled.View`
  height: auto;
  width: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Spacer = styled.View`
  height: 32px;
  width: 100%;
  background: ${props => props.theme.body.background};
`;
