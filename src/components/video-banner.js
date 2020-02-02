import React from 'react'
import styled from 'styled-components';
import * as styleDict from '../style-dictionary'
import coverImg from '../images/redMar.png';
import s from '../images/blueMar.png';
import svg from '../images/Asset 6.svg';


import SoMeIcon from '../components/social-media-icon'

const Container = styled.div `
    position: relative;
    grid-area: video;
    height: 90vh;
    padding: 20px;

    -webkit-box-shadow: 0px 7px 10px -4px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 7px 10px -4px rgba(0,0,0,0.2);
    box-shadow: 0px 7px 10px -4px rgba(0,0,0,0.2);

    
`
const Content = styled.div ` 
    position: relative;
    background-color: grey;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 40px 300px auto 40px;
    grid-template-rows: 40px 230px auto 40px;

    background-image: url(${coverImg}) ;

    background-size:cover;

`

const Sticks = styled.div ` 
    position: absolute;
    width: 100%;
    height: 100%;
    
    background-image: url(${s}) ;
    background-size:cover;
   
    mask: url(${svg})  ${props => props.posX} 350px;   
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
`






const NavUl = styled.ul `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    list-style-type: none;
    position: relative;
    font-family: ${styleDict.fontFamilies.Capitol};
    font-size: ${styleDict.FontSizes.navMenu};  
    font-weight: 600;
    font-style: normal;
    color: ${styleDict.fontColors.coverImg};

    margin: 0px;
    padding: 0px;

`

const Li = styled.li `
    z-index: ${styleDict.zIndex.header};
    width: 100px;
    transition: 0.3s;
    &:hover {
        color: grey; 
    }

`
const LeftStikkerCenterSticker = styled.div`     
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;

    margin-top: auto;

`

const MainText = styled.h2 `
    color: ${styleDict.fontColors.coverImg};;
    font-size: ${styleDict.FontSizes.h3};
    font-family: ${styleDict.fontFamilies.RalewayExtraBold};
    font-weight: 800;
    font-style: normal;
    white-space: nowrap;

    margin-bottom: 0px;
    
`
const SubText = styled(MainText) ` 
     font-size: ${styleDict.FontSizes.p};
     margin-top: 5px;
`

const SocialMedia = styled.div ` 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    display:flex; 
    margin-left: auto;
   
    
`
const UlSoMe = styled.ul ` 
     list-style-type: none;
     padding: 0px;
     margin: 0px;
     
     
`
const LiSoMe = styled.li `
    margin-bottom: 10px;
`

const AnimationZone = styled.div ` 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    position: relative;
`

const Stick = styled.div ` 
    width: 20px;
    height: 120px;

    background-color: white;
`

const VideoBanner = (props) => {
    
    return(
        <Container>
            
            <Content>

            

                <NavUl>
                    <Li>Projects</Li>
                    <Li>About</Li>
                    <Li>Contact</Li>
                </NavUl>
                <LeftStikkerCenterSticker>
                    <MainText>CurryNamNam // Production</MainText>
                    <SubText>Created By // Sune Øllgaard Klem</SubText>
                    <SubText>Tech // Developer</SubText>
                </LeftStikkerCenterSticker>
                <SocialMedia>
                    <UlSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                    </UlSoMe>
                </SocialMedia>
            
            </Content>
        </Container>
    )

}

export default VideoBanner