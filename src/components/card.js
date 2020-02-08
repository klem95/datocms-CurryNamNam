import React from 'react'
import styled from 'styled-components';
import * as styleDict from '../style-dictionary'
import testImg from '../images/projectTest.jpg';
import bgImage from '../images/orangeMar.png';
import blue from '../images/blueMar.png';
import { Link } from 'gatsby'



const Container = styled.div ` 
    grid-column-end: span ${props => props.size};
    grid-row-end: span ${props => props.size};
    border-radius: 5px;  
    background-image: url(${blue}) ;
    background-size: cover;
    padding: 0px;  

    transition: 0.2s;

    &:hover {
        padding: 5px;  
        
    }



`

const BG = styled.div ` 
    position: relative;
    background-image:  url(${props => props.img});
    background-size: 100% 100%;
    border-radius: 5px;   

    width: 100%;
    height: 100%;
 
`

const HeaderText = styled.div `  
    position:absolute;
    width: 60%;
    height: auto;
    background:rgba(150,150,150,0.7);
    padding: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
  
    border-radius: 0px 3px 3px 0px;
`

const Text = styled.h3`  
    margin: 0px;
    font-family: ${styleDict.fontFamilies.RalewayExtraBold};
    font-size: ${styleDict.FontSizes.h3};  
    font-weight: 600;
    font-style: normal;
    color: ${styleDict.fontColors.coverImg};
    letter-spacing: 2px;

`
const ReadMore = styled.div  `
    position:absolute;
    margin-top: 65px;
    margin-left: 10px;
    width: 0%;
    height: 15%;

    transition: 0.3s;
    ${Container}:hover & {
        width: 20%;
    }



`

const Pin = styled.div  `

    width: 0%;
    height: 30%;
    background: white;
    background-size: 100px;
    margin-bottom: 2px;
    transition: hue-rotate 1s;
 

    ${Container}:hover & {
        width: 100%;
    }

`

const MeatPin = styled(Pin)  `
    transition: 0.8s;
    ${Container}:hover & {
        width: 75%;
  }

`

const Tag = styled.h4`  
    margin: 0px;
    font-family: ${styleDict.fontFamilies.RalewayExtraLight};
    font-size: ${styleDict.FontSizes.h4};  
    font-weight: 600;
    font-style: normal;
    color: ${styleDict.fontColors.coverImg};

    position: absolute;
    bottom: 10px;
    margin-left: 10px;
`





const Card = (props) => {
    return(
        <>
           <Container size={props.size}>
              <BG img = {props.thumbnail.fluid.src}>
                <HeaderText><Text>{props.title}</Text></HeaderText>
                <Link  to="/project/"  state={props}>
                    <ReadMore>
                        <Pin></Pin>
                        <MeatPin></MeatPin>
                        <Pin></Pin>
                    </ReadMore>
                </Link>
                <Tag>[{props.tags}]</Tag>
        
              </BG>
           </Container>
        </>
    )
}

export default Card
