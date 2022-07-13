import React from 'react';
import { TouchableOpacityProps } from 'react-native';


import { Container, Icon, Title } from './style';
const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
    type : 'up' | 'down';
    title: string;
    isActive : boolean;
}

export function TransactionTypeButtom({
    type,
    title,
    isActive,
    ...rest
}: Props){
    return(
     <Container
      type={type}
      {...rest} 
      isActive={isActive}>
       <Icon 
          name={icons[type]} 
          type={type}
        />
       <Title>
         {title}
       </Title> 
     </Container>
    );
}