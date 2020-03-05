import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.body.foreground}
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Form = styled.View`
  height: auto;
  width: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;
