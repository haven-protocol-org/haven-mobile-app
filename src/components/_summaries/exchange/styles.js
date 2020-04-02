import styled from "styled-components";

export const Container = styled.View`
  height: auto;
  width: auto;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
`;

export const Key = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.type.secondary};
`;

export const Value = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.type.primary};
`;

export const Row = styled.View`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 2px;
`;
