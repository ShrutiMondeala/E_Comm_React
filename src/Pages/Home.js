import React from 'react';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Catagories from '../component/Catagories';
import Foter from '../component/Foter';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Product from '../component/Product';
import Slider from '../component/Slider';

const Container=styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Urbanist', sans-serif;

`

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catagories/>
            <Product/>
            <Newsletter/>
            <Foter/>
        </div>
    );
}

export default Home;
