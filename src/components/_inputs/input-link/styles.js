import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  height: auto;
  width: 100%;
  padding: 4px 12px 0px 12px;
  background: ${props => props.theme.body.foreground};
  display: flex;
  align-items: flex-start;
`;

export const Field = styled.View`
  font-size: 16px;
  color: ${props => props.theme.type.primary};
  padding-bottom: 8px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
`;

export const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;
