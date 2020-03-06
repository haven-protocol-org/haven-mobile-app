import styled from "styled-components";

export const Container = styled.View`
  height: auto;
  width: auto;
  margin: 8px;
  padding: 12px;
  border-radius: 4px;
  border: ${props => props.theme.body.border};
  background: ${props => props.theme.body.background};
`;

export const Row = styled.View`
  display: flex;
  width: 100%;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
