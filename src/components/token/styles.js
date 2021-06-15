import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: auto;
  width: auto;
  padding: 20px;
  background: #2b2e32;
  margin: 8px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  flex-direction: column;
  background: ${props => props.theme.body.foreground};
  border: ${props => props.theme.body.border};
  border-radius: 4px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
