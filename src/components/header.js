import React from "react";
import styled from 'styled-components';
import * as styleDict from '../style-dictionary'

const Container = styled.div `
    grid-area: header;
    position: absolute;   
    width: 100%;
    display: flex;
    justify-content: left;

`

const Ul = styled.ul `
    list-style-type: none;
    position: relative;
    font-family: ${styleDict.fontFamilies.RalewayExtraLight};
    font-size: ${styleDict.FontSizes.navMenu};  
    letter-spacing: 3px;
    color: ${styleDict.fontColors.coverImg};
    margin-left: 20px;
`

const Li = styled.li `
    margin-bottom: 10px;

    transition: 1s;
    &:hover {
        color: red; 
    }

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