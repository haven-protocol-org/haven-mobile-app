import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${props => props.theme.body.foreground};

  align-items: flex-start;
  justify-content: flex-start;
`;
