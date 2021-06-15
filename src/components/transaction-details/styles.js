import styled from "styled-components/native";

export const Container = styled.View`
  height: auto;
  width: auto;
  padding-top: 12px;
  background: ${props => props.theme.body.foreground};
  border: 1px solid ${props => props.theme.body.border};
  margin: 8px;
  padding-bottom: 12px;
  border-radius: ${props => props.theme.styles.radius[1]};
`;

export const Row = styled.View`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Header = styled.View`
  height: auto;
  width: auto;
  padding-bottom: 12px;
  margin-left: 12px;
  margin-right: 12px;
  background: ${props => props.theme.body.foreground};
`;
