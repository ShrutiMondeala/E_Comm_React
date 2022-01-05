import { Facebook, Instagram, MailOutline, Map, MapOutlined, PhoneAndroid, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container=styled.div`
    display:flex;
`
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:10px;
`
const Logo= styled.h1`
`
const Desc =styled.p`
    margin:20px 0;
`
const SocialIcons= styled.div`
    display:flex;
   
`
const SocialIcon= styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    margin:10px;
    cursor:pointer;
    
    &:hover {
        transform: scale(1.1);
    }
`
const Right=styled.div`
    flex:1;
    padding:20px;
`
const ContactItem=styled.div`
    display:flex;
    margin-bottom:20px;
    align-items:center;
    
`
const Payment=styled.img`
    margin-left:20px;
    height:40px;
`
const Center=styled.div`
    flex:1;
    padding:20px;
`

const Title=styled.h3`
margin-bottom:30px;
`
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`
const Foter = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. 
                </Desc>
                <SocialIcons>
                    <SocialIcon color="rgb(90, 90, 168)">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="rgb(236, 70, 98)">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="green">
                        <WhatsApp/>
                    </SocialIcon>
                    <SocialIcon color="rgb(41, 41, 87)">
                        <Twitter/>
                    </SocialIcon>
                </SocialIcons>
                
            </Left>
            <Center>
                <Title>Userful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fasion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>OrderTracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem>
                    <MapOutlined style={{marginRight:"10px"}}/>234, jorden street, Barsalona, New York
                </ContactItem>
                <ContactItem>
                    <PhoneAndroid style={{marginRight:"10px"}}/>
                    +1 234 567 89
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    lama.wear@org.com
                </ContactItem>
                <Payment src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"/>
            </Right>
            
        </Container>
    );
}

export default Foter;
