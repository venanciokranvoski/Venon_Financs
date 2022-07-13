import React from 'react';

import { Container,
         Header,
         Title,
         Footer,
         Amount,
         LastTransction,
         Icon
       } from './style'; 

export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Footer>
                <Amount>R$ 18.800,00</Amount>
                <LastTransction>Última entrada dia 13 de junho

                </LastTransction>
            </Footer>
        </Container>
    )
   
}