import React from 'react'
import styled from 'styled-components';
import * as styleDict from '../style-dictionary'


const Container = styled.div ` 
    grid-column-end: span 1;
    grid-row-end: span 1;

    background-color: yellow;
`

const BG = styled.div `  
    width: 100px;
    height: 100px;


`




const Card = (props) => {
    return(
        <>
           <Container>
               <BG>

               </BG>
           </Container>
        </>
    )
}

export default Card
