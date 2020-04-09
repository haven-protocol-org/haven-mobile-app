import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  background: ${props => props.theme.body.background};
`;

export const Button = styled.TouchableOpacity`
  font-size: 16px;
  padding: 8px 12px;
  min-width: 80px;
  background: ${props => props.theme.button.primary};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

export const ImageWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 12px;
`;

export const Image = styled.Image`
  flex: 1;
  display: flex;
`;

export const ButtonLabel = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Box = styled.View`
  width: 100%;
  padding: 12px;
`;

export const Inner = styled.View`
  width: auto;
  height: auto;
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
