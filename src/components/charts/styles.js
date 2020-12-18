import styled from "styled-components";

export const Container = styled.View`
  height: 240px;
  width: 100%;
  background: ${(props) => props.theme.body.foreground};
  justify-content: center;
  margin-right: 20px;
  padding-right: 120px;
`;
