import styled from "styled-components";

export const Container = styled.View`
  height: 200px;
  width: 100%;
  background: ${props => props.theme.body.foreground};
  justify-content: center;
  border: ${props => props.theme.body.border};
  margin-right: 20px;
  align-items: center;
`;
