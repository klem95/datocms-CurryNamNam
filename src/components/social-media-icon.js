import React from 'react'
import styled from 'styled-components'
import * as styleDict from '../style-dictionary'
import icon from '../images/instagram.png';

const Item =styled.div `
    display:flex;
    align-items: center;
    margin-bottom: 20px;
    float: right;
    position: relative;

    z-index: 2;
    
    
    
    
   
`

const SoMeImg = styled.img ` 
    position: absolute;
    src: url(${props=> props.src});
    width: 25px;
    height: 25px;
    cursor:pointer;
    z-index: 3;

    right: 0px;

    margin-left: 100px;
    

`

const Text = styled.p ` 
    color: white;
    margin: 0px;
    padding-right: 10px;
    margin-right: 25px;
    font-size: ${styleDict.FontSizes.h4};
    font-family: ${styleDict.fontFamilies.RalewayExtraBold};
    font-weight: 800;
    

    
    
    ::before, ::after {
        position: absolute;
        content: '${props => props.text}';
        top: 0;
        left: 0;
        visibility: hidden;
        filter: blur(1px);
        z-index: -1;  
    }

   
    ${SoMeImg}:hover ~ &{ 
        ::before, ::after {
            visibility: visible;
        }
        filter: blur(0.1px);
    }

    ${SoMeImg}:hover ~ &{ 
        ::before {
            color: rgba(1,1,1,0.5);
            animation: glitch 1s cubic-bezier(.25,.46,.45,.94) both infinite;
        }
    }

    ${SoMeImg}:hover ~ &{ 
        ::after {
            color: rgba(1,1,1,0.5);
            animation: glitch 1s cubic-bezier(.25,.46,.45,.94) both infinite;
        }
    }
  
    @keyframes glitch {
        0%{
            transform: translate(0);
        }
        25%{
            transform: translate(0px, -3px);
        }
        50%{
            transform: translate(0);
        }
        75%{
            transform: translate(0px, 3px);
        }
    
        100%{
            transform: translate(0);
        }
    }
    
`




const SoMeIcon = (props) => {
    return(
        <>
            <Item> 
                <SoMeImg src={props.img}/>
                <Text text= {props.id} >{props.id}</Text>
            </Item>
        </>
    )
}

export default SoMeIcon