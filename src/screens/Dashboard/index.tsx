import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


import  { Container,
          Header,
          UserWrapper,
          UserProfile,
          Photo,
          User,
          UserGreeting,
          UserName,
          Icon,
          HighlightCards,
          Transctions,
          T_lista,
          TransactionList
        } from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
   const data: DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 13.000,00",
        category: {
            name:'Vendas',
            icon: 'dollar-sign',
        },
        date: "15/06/2022"
    },
    {
        id: '2',
        type: 'negative',
        title: "Humburgue Pizzy",
        amount: "R$ 58.00",
        category: {
            name:'Alimentação',
            icon: 'coffee',
        },
        date: "15/06/2022"
    },
    {
        id: '3',
        type: "negative",
        title: "Aluguel apartamento",
        amount: "R$ 1.500,00",
        category: {
            name:'Vendas',
            icon: 'shopping-bag',
        },
        date: "15/06/2022"
    },
   ]; 
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserProfile>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/41402809?v=4'}} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Venancio</UserName>
                        </User>
                    </UserProfile>
                    <Icon name='power' />
                </UserWrapper>
            </Header>
            <HighlightCards > 
               <HighlightCard />
               <HighlightCard />
               <HighlightCard />
            </HighlightCards>
            <Transctions>
               <T_lista>Listagem</T_lista>

                <TransactionList 
                   data={data}
                   keyExtractor={item => item.id}
                   renderItem={({ item })=>
                   <TransactionCard data={item} />}
                />
            </Transctions>
        </Container>
    )
}

