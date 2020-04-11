import styled from "styled-components";

export const Container = styled.View`
  width: 100%;
  padding: 4px 12px 0px 12px;
  background: ${props => props.theme.body.foreground};
  display: flex;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
