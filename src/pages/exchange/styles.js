import styled from "styled-components";

export const Scroll = styled.ScrollView`
  background: ${(props) => props.theme.body.background};
`;

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.body.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.type.primary};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Border = styled.View`
  height: 0.5px;
  width: 100%;
  background: ${(props) => props.theme.body.border};
`;

export const Preview = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Chevron = styled.Image`
  height: 24px;
  width: 24px;
`;

export const PreviewLabel = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.type.primary};
  text-align: left;
`;
