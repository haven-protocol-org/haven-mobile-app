import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.body.background};
`;

export const Wrapper = styled.View`
  height: auto;
  width: 100%;
  background: ${props => props.theme.body.background};
  padding: 8px;
`;
