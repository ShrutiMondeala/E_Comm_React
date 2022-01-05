import React from 'react';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Foter from '../component/Foter';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Product from '../component/Product';


const Container=styled.div`

`
const Title=styled.h1`
    margin:20px;
`
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter=styled.div`
    margin:20px;
`
const Select=styled.select`
    padding:10px;
    margin-right:10px;
`
const Option=styled.option`

`
const FilterText= styled.span`
    font-size:20px;
    font-weight:500;
`
const Productlist = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText style={{marginRight:"10px"}}>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Pink</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select style={{marginLeft:"10px"}}>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                    <Select style={{marginLeft:"10px"}}>
                        <Option disabled selected>
                            Newest
                        </Option>
                        <Option>Price(inc)</Option>
                        <Option>Price(dec)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Product/>
            <Newsletter/>
            <Foter/>
        </Container>
    );
}

export default Productlist;
