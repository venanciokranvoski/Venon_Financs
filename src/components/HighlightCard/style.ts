import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape }
    width: ${RFValue(300)}px;
   
    margin-right: 16px;
    height: ${RFValue(220)}px;

    border-radius: 6px;
    padding: 19px 23px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title  = styled.Text`
    font-family: ${({ theme })=> theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme })=> theme.colors.text_dark};
`;

export const Footer = styled.View``;
       
export const Amount = styled.Text`
    font-family: ${({ theme })=> theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${({ theme })=> theme.colors.text_dark};
    margin-top: 30px;
`;

export const LastTransction = styled.Text`
    font-family: ${({ theme })=> theme.fonts.regular};
    font-size: ${RFValue(12)}px;

    color: ${({theme})=> theme.colors.text};

`;
        
export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: ${({theme})=> theme.colors.success};
`;



