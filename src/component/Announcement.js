
import React from 'react';
import styled from 'styled-components';


const Conatiner=styled.div`
height: 30px;
background-color: teal;
color: white;
display:flex;
font-size:14px;
align-items:center;
justify-content:center;
font-weight:600;
`
const Announcement = () => {
    return (
        <Conatiner>
            SuperDeal !!! Free Shipping for the orders above 100$
        </Conatiner>
    );
}

export default Announcement;
