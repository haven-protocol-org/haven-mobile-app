import styled from "styled-components";

export const Container = styled.TouchableOpacity`
  height: auto;
  width: auto;
  background: ${props => props.theme.body.background};
  border-radius: 4px;
  border: ${props => props.theme.body.border};
  padding: 12px 0px 0px 0px;
  margin: 10px;
`;

export const State = styled.View`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
  background: #6a7fc8;
`;

export const Status = styled.Text`
  font-size: 10px;
  text-transform: uppercase;
  color: white;
  padding: 2px;
`;

export const Row = styled.View`
  display: flex;
  width: 100%;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 8px;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
`;
