import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.body.foreground};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Border = styled.View`
  height: 0.5px;
  width: 100%;
  background: ${props => props.theme.body.border};
`;
