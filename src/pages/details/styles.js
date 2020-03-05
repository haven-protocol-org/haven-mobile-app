import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  width: auto;
  background: ${props => props.theme.body.foreground};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
