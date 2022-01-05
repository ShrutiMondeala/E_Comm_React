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
    flex-direction:column;
`
const Input=styled.input`
    flex:1;
    min-width:80%;
    margin:10px 0;
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
const Link=styled.a`
    margin:5px 0;
    font-size:12px;
    text-decoration:underline;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOGIN ACCOUNT</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>   
                    <Button>LOGIN</Button>
                    <Link>Forgot password</Link>
                    <Link>Create Account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;
