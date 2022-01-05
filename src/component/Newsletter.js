import { SendOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    height:60vh;
    flex-direction:column;
    background-color: rgb(219, 213, 213);
    display:flex;
    align-items:center;
    justify-content:center;
`
const Desc=styled.div`
font-size:24px;
letter-spacinf:20x;
font-weight:500;
`
const Title=styled.h1`
    font-size:70px;
    margin-bottom:10px;
`
const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:solid grey 1px;
    margin-top:10px;
`
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`

const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get all insites from your favirouit brand on timly basis before anyone !!!</Desc>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <SendOutlined/>
                </Button>
            </InputContainer>
        </Container>
    );
}

export default Newsletter;
