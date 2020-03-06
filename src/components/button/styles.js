import styled from "styled-components";

export const Container = styled.View`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  padding: 16px;
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
