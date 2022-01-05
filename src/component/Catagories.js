import React from 'react';
import styled from 'styled-components';
import { catagories } from '../data';
import Catagoryitems from './CatagoryItems';


const Container=styled.div`
        display:flex;
        padding:20px;
        justify-content:space-between;
`
const Catagories = () => {
    return (
        <Container>
            {catagories.map((item)=>(
                <Catagoryitems item={item} key={item.id}/>
            ))}
        </Container>
    );
}

export default Catagories;
