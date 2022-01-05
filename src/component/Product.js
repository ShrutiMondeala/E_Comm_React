import React from 'react';
import styled from 'styled-components';
import { proularProducts } from '../data';
import Procuctitems from './ProcuctItems';


const Container=styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`
const Product = () => {
    return (
        <Container>
            {proularProducts.map((item)=>(
                <Procuctitems product={item} key={item.id}/>
            ))}
        </Container>
    );
}

export default Product;
