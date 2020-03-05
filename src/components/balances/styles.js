import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  height: 200px;
  width: 100%;
  background: ${props => props.theme.body.foreground};
  align-items: center;
  justify-content: center;
`;

export const Border = styled.View`
  height: 0.5px;
  width: 100%;
  background: ${props => props.theme.body.border};
`;
