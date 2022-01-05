import React from 'react';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Foter from '../component/Foter';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';

const Container=styled.div`

`
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer=styled.div`
    flex:1;
    background-color:rgb(219, 213, 213);
    display:flex;
    justify-content: space-around;
    height:50%;
    width:30%;
`
const Image=styled.img`
    width:70%;
    height:80%;
    object-fit:cover;
`
const InfoContainer=styled.div`
    padding:0px 50px;
    flex:1;
`
const Title=styled.h1`
    margin-bottom:10px;
    font-weight:200;
`
const Desc=styled.p`
    margin-bottom:10px;
`
const Price=styled.div`
font-weight:100;
font-size:40px;`

const FilterContainer=styled.div`
    width:70%;
    margin:30px 0;
    display:flex;
    justify-content:space-between;
`
const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`
const Filter=styled.div`
        display:flex;
        align-items:center;
        
`
const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=> props.color};
    margin-left:10px;
`
const FilterSize=styled.select`

`
const FilterOption=styled.option`

`
const AddContainer=styled.div`
        display:flex;
        align-items:center;
        width:70%;
        justify-content:space-between;
`
const AmountContainer=styled.div`
    font-weight:500;
    font-size:20px;
    display:flex;
    
`
const Add=styled.div``
const Remove=styled.div``
const Amount=styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    border-radius:5px;
    border:1px solid teal;
    margin:0 10px;

    
`
const Button=styled.button`
    padding:10px;
    border:1px solid teal;
    font-weight:500;
    cursor:pointer;

    &:hover{
        background-color:teal;
        color:white;
        transition:1s ease all;
    }

`
const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw29606636/1_front_750/00444214-01.jpg?sw=500&sh=750"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Denim Jumpsuit</Title>
                        <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Desc>
                        <Price>20$</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="blue"/>
                                <FilterColor color="grey"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterOption>S</FilterOption>
                                    <FilterOption>L</FilterOption>
                                    <FilterOption>M</FilterOption>
                                    <FilterOption>XL</FilterOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove>
                                    -
                                </Remove>
                                <Amount>1</Amount>
                                <Add>
                                    +
                                </Add>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <Newsletter/>
            <Foter/>
        </Container>
    );
}

export default Product;
