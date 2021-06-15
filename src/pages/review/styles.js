import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${(props) => props.theme.body.foreground};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Overview = styled.View`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  font-size: 32px;
  color: ${(props) => props.theme.type.primary};
  font-weight: 600;
`;

export const Cancel = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.type.primary};
  padding-left: 12px;
`;

export const ButtonWrapper = styled.SafeAreaView`
  width: 100%;
  height: auto;
`;
