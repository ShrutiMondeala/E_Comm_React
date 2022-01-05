import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Info=styled.div`
    opacity:0;
    display:flex;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    align-items:center;
    margin-left:8%;
    color:black;
    
`
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:black;
    position:absolute;
    margin-right:60%;
    opacity:0;
`
const Container=styled.div`
    flex:1;
    display:flex;
    margin:5px;
    min-width:350px;
    height:350px;
    align-items:center;
    justify-content:center;
    background-color: rgb(219, 213, 213);
    position:relative;
    overflow:hidden;

    &:hover ${Circle}{
        opacity:0.7;
        transition: 1s ease all;
    }
    &:hover ${Info}{
        opacity:1;
        transition: 1s ease all;
        cursor:pointer;
    }

`


const Image=styled.img`
    height:90%;
`

const Icon=styled.div`
    width:10%;
    height:11%;
    display:flex;
    margin-left:5px;
    align-items:center;
    justify-content:center;
    background-color:white;
    border-radius:50%;

    &:hover{
        transform: scale(1.1);
        transition: all 0.4s ease; 
        color:${props=> props.color}
        
    }
`

const Procuctitems = ({product}) => {
    return (
        <Container>
            <Circle/>
            <Image src={product.img}/>
            <Info>
                <Icon color="grey">
                    <ShoppingCartOutlined />
                </Icon>
                <Icon color="blue">
                    <SearchOutlined />
                </Icon>
                <Icon color="red">
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
}

export default Procuctitems;
