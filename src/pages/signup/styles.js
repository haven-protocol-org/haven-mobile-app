import styled from "styled-components";
export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.body.background};
`;
