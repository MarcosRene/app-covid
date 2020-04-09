import React from 'react';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Container from '../../components/Container';

import {
  Content,
  Button,
  TextButton,
  ContentText,
  Title,
  Description,
  Att,
  Item,
} from './styles';

const message =
  'Olá!!! Você está entrando em contato com suporte da organização. Aguarde um instante e agradecemos pela compreensão. =D';

export default function Help() {
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=COLOQUEONUMEROAQUI&text=${message}`);
  }

  return (
    <Container>
      <Content>
        <ContentText>
          <Title>Clique no botão abaixo caso você</Title>
          <Description>
            <Icon name="times" color="#50fa7b" size={16} />
            <Item>
              {' Conheçe alguém que está passando por necessidades.\n'}
            </Item>
            <Icon name="times" color="#50fa7b" size={16} />
            <Item>{' Se você está afim de contribuir.\n'}</Item>
            <Icon name="times" color="#50fa7b" size={16} />
            <Item>{' Você está precisando de ajuda.\n'}</Item>
          </Description>

          <Att>
            Agradecemos a sua ajuda, ela poderá salvar muitas pessoas.
            <Icon name="smile-wink" color="#ff79c6" size={20} />
          </Att>
        </ContentText>

        <Button onPress={sendWhatsapp}>
          <TextButton>Quero ajudar</TextButton>
          <Icon name="heart" color="#ff79c6" size={20} />
        </Button>
      </Content>
    </Container>
  );
}
