import React from 'react';
import styled from 'styled-components';
import {mobile} from "../Responsive"

import { Mail, MailOutline, Search, ShopOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { Badge, Input } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


const Container = styled.div`
    height:60px;
    background-color: black;
    ${mobile({
        height:"50px"
    })}
`
const Wrapper= styled.div`
    padding: 10px 20px;
    color:white;
    display:flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
        padding:"10px 0"
    })}
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display:"none"
    })}
`
const SearchContainer=styled.div`
    // border:gray 2px solid;
    display: flex;
    align-items: center;
    margin-left:25px;
    
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content:flex-end;
`

const Menuitem=styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:17px;
`
const Logo=styled.div`
    font-weight: 500;
    font-size:26px;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search" style={{color:"white"}}/>
                        <Search style={{color:"grey",fontSize:"16px"}}/>
                    </SearchContainer>
                    </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <Menuitem>Register</Menuitem>
                    <Menuitem>Sign in</Menuitem>
                    <Menuitem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </Menuitem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
