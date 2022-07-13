import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './style';

interface Props extends TouchableOpacityProps{
    title: string;
}

export function Buttom({title, ...rest}: Props){
    return(
        <Container {...rest}>
            <Title>
               { title }
            </Title>
        </Container>
    );
}