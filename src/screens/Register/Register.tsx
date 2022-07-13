import React, {useState} from 'react';
import { Container,
         Header,
         Title,
         Form,
         Fiels,
         TransctionTypes } from './style';

import { Input } from '../../components/Form/index';
import { Buttom } from '../../components/Form/Buttom';
import { TransactionTypeButtom } from '../../components/Form/TransctionTyoeButton';


export function Register(){
    const [transctionType, setTransctionType] = useState('');

    function handleTransctionSelect(type: 'up' | 'down'){
       setTransctionType(type);
    }
  
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fiels>
                    <Input 
                        placeholder='Nome'
                    />

                    <Input 
                        placeholder='Preço'
                    />
                    <TransctionTypes>
                        <TransactionTypeButtom
                        type="up"
                        title="Income"
                        onPress={() => handleTransctionSelect('up')}
                        isActive={transctionType === 'up'}
                        />
                        <TransactionTypeButtom
                        type="down"
                        title="Outcome"
                        onPress={()=> 
                        handleTransctionSelect('down')}
                        isActive={transctionType === 'down'}
                        />
                    </TransctionTypes>


                </Fiels>
                <Buttom
                        title='Enviar'
                    />
            </Form>


        </Container>
    );
}