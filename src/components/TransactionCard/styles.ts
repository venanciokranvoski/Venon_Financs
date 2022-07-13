import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {RFValue } from 'react-native-responsive-fontsize'


interface TransactionProps {
    type: 'positive' | 'negative';
}


export const Container = styled.View`
    background-color: ${({ theme})=> theme.colors.shape};
    padding: 17px 25px;
    margin: 5px 0px;
    border-radius: 5px;
`;
export const Title = styled.Text`
   font-family: ${({theme})=> theme.fonts.regular};
   font-size: ${RFValue(15)}px;
   
`;

export const Amount = styled.Text<TransactionProps>`
   font-family: ${({theme})=> theme.fonts.regular};
   font-size: ${RFValue(20)}px;
   margin-top: 2px;

   color: ${({theme, type})=>
    type === 'positive' ? 
   theme.colors.success : theme.colors.attencion};

`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;


`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=> theme.fonts.text};
`;

export const CategoryName = styled.Text`
     font-size: ${RFValue(14)}px;
     color: ${({ theme })=> theme.colors.text};

     margin-left: 17px;
`;

export const Date = styled.Text`
    font-size:${RFValue(14)}px;
    color: ${({ theme })=> theme.colors.text}; 
`;
