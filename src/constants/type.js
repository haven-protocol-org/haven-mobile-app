import styled from "styled-components";

export const Primary = styled.Text`
  font-weight: 700;
  font-size: 17px;
  color: ${props => props.theme.type.primary};
  letter-spacing: 0;
  line-height: 21px;
`;

export const Secondary = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 4px;
  text-align: ${props => (props.right ? "right" : "left")};
`;

export const Balance = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.theme.type.primary};
`;
