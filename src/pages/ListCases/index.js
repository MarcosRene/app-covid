import React from 'react';
import {FlatList, Linking} from 'react-native';

import Container from '../../components/Container';

import {
  Content,
  Card,
  Name,
  Description,
  PhoneText,
  Contact,
  PhoneNumber,
  Help,
  TextHelp,
} from './styles';

export default function ListCases() {
  const message =
    'Olá!!! Você está entrando em contato com suporte da organização. Aguarde um instante e agradecemos pela compreensão. =D';

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=COLOQUEONUMEROAQUItext=${message}`);
  }
  const data = [
    {
      id: '01',
      name: 'Maria',
      description:
        'Maria é uma senhora de 50 que está precisando de material higiênico e alimento. Atualmente é uma senhora desempregada.',
      number: '999999999',
    },
    {
      id: '02',
      name: 'Josefa',
      description:
        'Josefa precisa de alimentos, atualmente esta desempregada e mora com 5 filhos. Atualmente viuva e dois dos filhos tem 20 anos, mas desempregados',
      number: '999999999',
    },
    {
      id: '03',
      name: 'Carlos',
      description:
        'Carlos tem 38 anos, sofreu um acidente esta desabilitado de trabalho. Sua esposa tambéme está desempregada os mesmo tem 2 filhos.',
      number: '999999999',
    },
    {
      id: '04',
      name: 'Francisco',
      description:
        'Francisco atualmente passa por necessidades, pois está sem trabalhar a 6 meses. Precisa de ajuda com produtos de higiene e alimentação',
      number: '999999999',
    },
    {
      id: '05',
      name: 'Mara',
      description:
        'Mara é uma moça solteira, com 2 filhos. Não trabalha e esta precisando de cestas básicas pois a mesma a 2 dias não come direito.',
      number: '999999999',
    },
  ];

  return (
    <Container>
      <Content>
        <FlatList
          data={data}
          keyExtractor={(data) => String(data.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item: c}) => (
            <Card style={{elevation: 4}}>
              <Name>{c.name}</Name>
              <Description>{c.description}</Description>
              <Contact>
                <PhoneText>Telefone: </PhoneText>
                <PhoneNumber>(88) {c.number}</PhoneNumber>
              </Contact>
              <Help onPress={sendWhatsapp}>
                <TextHelp>Ajudar</TextHelp>
              </Help>
            </Card>
          )}
        />
      </Content>
    </Container>
  );
}
