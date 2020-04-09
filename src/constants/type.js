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

export const Information = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
`;

// Inputs and Cells
export const Value = styled.Text`
  width: auto;
  font-size: 17px;
  line-height: 26px;
  color: ${props => props.theme.type.primary};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 21px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  font-size: 17px;
  line-height: 26px;
  color: ${props => props.theme.type.primary};
  padding-bottom: 8px;
`;

export const Description = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  font-size: 17px;
  color: ${props => props.theme.type.primary};
  padding-bottom: 8px;
  line-height: 26px;
  min-height: 90px;
`;
