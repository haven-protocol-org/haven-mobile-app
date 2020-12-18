import styled from "styled-components";

export const Container = styled.TouchableOpacity`
  height: auto;
  width: auto;
  background: ${(props) => props.theme.body.background};
  border-radius: 4px;
  border: ${(props) => props.theme.body.border};
  padding: 12px 0px 0px 0px;
  margin: 10px;
  overflow: hidden;
`;

export const Primary = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: ${(props) => props.theme.type.primary};
  letter-spacing: 0;
  line-height: 22.5px;
`;

export const Secondary = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.type.secondary};
  letter-spacing: 0;
  line-height: 20px;
  text-align: ${(props) => (props.right ? "right" : "left")};
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
