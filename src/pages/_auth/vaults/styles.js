import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${props => props.theme.body.background};
  align-items: flex-start;
  justify-content: flex-start;
`;
