import styled from "styled-components";

export const Container = styled.View`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 100%;
  height: auto;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.styles.radius[1]};
  background: ${props => props.theme.button.primary};
`;

export const Label = styled.Text`
  font-size: 15px;
  color: #fff;
  width: 100%;
  text-align: center;
`;
