import React from "react";
import styled from 'styled-components';
import * as styleDict from '../style-dictionary'


const Container = styled.div `
    grid-area: header;
    position: absolute;
    
`

const Ul = styled.ul `
    list-style-type: none;
    margin: 20px;
    padding: 0px;
    position: relative;

    font-family: ${styleDict.fontFamilies.ConcertOne};
    
  
`

const Li = styled.li `
    display: inline;
    margin-right: 50px;
   
    
    font-size: ${styleDict.FontSizes.navMenu};
    transition: 0.5s cubic-bezier(.86,0,.07,1);


`

const Header = (props) => {
    return (
        <>
            <Container>
                <Ul>
                    <Li>Home</Li>
                    <Li>About</Li>
                    <Li>Contact</Li>
                </Ul>
            </Container>
        </>
    )
  }

  export default Header