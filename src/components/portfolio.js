import React from 'react'
import styled from 'styled-components';
import Card from './card'
import bgImage from '../images/blueMar.png';
import * as styleDict from '../style-dictionary'



const Container = styled.div `
    grid-area: portfolio;
    height: 1000px;
    background: #EEE;  
    padding-top: 40px;
`

const Grid = styled.div` 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 10px;
    grid-auto-rows:  minmax(180px, auto);
    grid-auto-flow: dense;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
`

const Title = styled.div ` 
    display: flex; 
    justify-content: flex-end;
    padding-left: auto;
`

const Box = styled.div ` 
    width: 300px;
    height: 100px;
    background-image: url(${bgImage}) ;
    background-size: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

`
const Text = styled.h2 ` 
    font-family: ${styleDict.fontFamilies.Capitol};
    font-size: ${styleDict.FontSizes.h2};  
    font-weight: 600;
    font-style: normal;
    color: ${styleDict.fontColors.coverImg};
    padding-top: 20px;
    letter-spacing: 5px;
    margin: 0px;

`


const Portfolio = (props) => {
    
    return(
        <Container>
            <Title><Box><Text>Projects</Text></Box></Title>
            <Grid> 
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Grid>
        </Container>
    )

}

export default Portfolio