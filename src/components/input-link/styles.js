import styled from "styled-components";
import { dark } from "../../constants/themes.js";

const placeholder = `${props => props.theme.type.primary}`;

export const Container = styled.TouchableOpacity`
  height: auto;
  width: 100%;
  padding: 4px 12px 0px 12px;
  background: ${props => props.theme.body.foreground};
  display: flex;
  align-items: flex-start;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
`;

export const Input = styled.Text`
  width: auto;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.type.primary};
`;

export const Border = styled.View`
  background: ${props => props.theme.body.border};
  width: 100%;
  height: 1px;
`;

export const Field = styled.View`
  font-size: 16px;
  color: ${props => props.theme.type.primary};
  padding-bottom: 8px;
`;

export const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

export const Cell = styled.TouchableOpacity`
  height: 26px;
  width: 100%;
  padding-bottom: 8px;
`;

export const Toggle = styled.View`
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.type.primary};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
`;
