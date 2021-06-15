import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: auto;
  background: ${(props) => props.theme.body.foreground};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Cancel = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.type.primary};
  padding-left: 12px;
`;
