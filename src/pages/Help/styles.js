import styled from 'styled-components/native';

export const Content = styled.View`
  margin: 0 40px;
  padding: 30px 0;

  flex: 1;
  justify-content: space-between;
`;

export const ContentText = styled.View`
  padding: 0;
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #6272a4;
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 10px;
`;

export const Item = styled.Text`
  font-size: 16px;
  line-height: 25px;
  color: #6272a4;
`;

export const Button = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  margin-top: 30px;

  border: 1px solid #6272a4;
  border-radius: 4px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  padding-right: 10px;

  color: #6272a4;
  font-size: 16px;
  font-weight: bold;
`;

export const Att = styled.Text`
  margin-top: 30px;
  font-size: 16px;
  line-height: 25px;
  color: #6272a4;
`;
