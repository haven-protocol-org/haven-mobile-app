import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-right: 12px;
`;

export const Label = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.type.primary};
  font-weight: 500;
`;
