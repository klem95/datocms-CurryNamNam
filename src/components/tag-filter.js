import React from 'react'
import styled from 'styled-components';

const Bg = styled.div `
    float:left;
    display:inline; 
    
    border:0.16em solid rgba(255,255,255,0);
    border-radius:2em;
    box-sizing: border-box;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align:center;
    transition: all 0.2s;
    background-color:#f14e4e;
    width: 100px;
    height: 50px;

    grid-column-end: span 1;
    grid-row-end: span 1;

    margin-left: 20px;


   :hover{
       border-color: rgba(255,255,255,1);
    }

    :target {
  color: blue;
}
    
 `

const Button = styled.button `
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    width: 100%;
    height: 100%;
    z-index: 1;

    

 `

 


const TagFilter = (props) => {
    return (
        <>
            <Bg>
                <Button value= {props.data} onClick={props.toogleMap}>{props.data}</Button>
            </Bg>
        </>
    )
 
}


export default TagFilter