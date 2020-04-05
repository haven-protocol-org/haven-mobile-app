import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  display: flex;

  justify-content: flex-start;
  background: ${props => props.theme.body.background};
`;

export const Button = styled.TouchableOpacity`
  font-size: 16px;
  height: 32px;
  width: 70px;
  background: ${props => props.theme.button.primary};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

export const Box = styled.View`
  width: 100%;
  padding: 12px;
`;
export const Inner = styled.View`
  width: auto;
  background: ${props => props.theme.body.foreground};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.body.border};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 16px 12px;
  border-radius: 4px;
`;
