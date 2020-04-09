import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  margin: 0 40px;
  padding-top: 30px;
`;

export const Card = styled.View`
  width: 100%;
  padding: 10px 15px;
  background: #f8f8f2;
  border-radius: 4px;

  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #44475a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #6272a4;

  text-align: justify;
`;

export const Contact = styled.View`
  margin-top: 15px;
  flex-direction: row;
`;

export const PhoneText = styled.Text`
  font-size: 14px;
  color: #44475a;
  font-weight: bold;
`;

export const PhoneNumber = styled.Text`
  font-size: 14px;
  color: #6272a4;
  font-weight: bold;
`;

export const Help = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 8px 15px;
  border-radius: 4px;
  background: #ff79c6;

  align-items: center;
`;

export const TextHelp = styled.Text`
  color: #f8f8f2;
  font-weight: bold;
`;
