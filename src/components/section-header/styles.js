import styled from "styled-components/native";

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: 10px;
`;

export const Border = styled.View`
  height: 1px;
  background: ${props => props.theme.body.border}
  margin-top: 16px;
`;
