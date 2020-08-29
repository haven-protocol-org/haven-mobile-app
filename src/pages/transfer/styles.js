import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.body.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Border = styled.View`
  height: 0.5px;
  width: 100%;
  background: ${(props) => props.theme.body.border};
`;

export const Preview = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 48px;
  width: 100%;
  padding-left: 12px;
`;

export const PreviewLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: left;
`;
