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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 5px;
    grid-auto-rows:  minmax(250px, auto);
    grid-auto-flow: dense;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background: #CCCA; 

`

const Title = styled.div ` 
    display: flex; 
    justify-content: flex-end;
    padding-left: auto;
    margin-bottom: 20px;
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

    border-radius: 3px 0px 0px 3px;

    transition: 2s;

    &:hover {
    filter: hue-rotate(90deg);

    }


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
    let children = []
    for (let j = 0; j < props.thumbnailData.length; j++) {
        children.push(<Card key={j} {...props.thumbnailData[j].node} ></Card>)
      }

    return(
        <Container>
            <Title><Box><Text>Projects</Text></Box></Title>
            <Grid> 
                {children}
            </Grid>
        </Container>
    
    )

}

export default Portfolio

