import styled from "styled-components";

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: 4px 12px 0px 12px;
  background: ${props => props.theme.body.foreground};
`;

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.body.foreground};
`;

export const CopyPaste = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.type.secondary};
`;
