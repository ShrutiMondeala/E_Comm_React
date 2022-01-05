import React from 'react';
import styled from 'styled-components';


const Container=styled.div`
    width:100vw;
    height:100vh;
    background-image:
    url("https://pbs.twimg.com/media/FIDXU6vUcAACdR6.jpg");
    display:flex;
    align-items:center;
    justify-content:center;
`
const Title=styled.h1`
    font-weight:400;
    text-align:center;
    padding:20px;
`
const Wrapper=styled.div`
   padding:20px;
   width:40%;
   background-color:white;
`
const Form=styled.div`
    display:flex;
    flex-wrap:wrap;
`
const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding:10px;
`
const Button=styled.button`
    width:40%;
    font-weight:500;
    border:none;
    padding:15px 20px;
    background-color: rgb(223, 117, 56);
    color:white;
    cursor:pointer;
`
const Aggrement=styled.span`
    margin:20px 0px;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Input placeholder="firstname"/>
                    <Input placeholder="lastname"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Aggrement>
                        By clicking the checkbox, I agree to the terms and conditions of the LAMA and allow tem access to send me work related emails
                    </Aggrement>
                    
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;
