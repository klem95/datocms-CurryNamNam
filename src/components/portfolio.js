import React from 'react'
import styled from 'styled-components';
import Card from './card'
import bgImage from '../images/blueMar.png';
import * as styleDict from '../style-dictionary'
import TagFilter from '../components/tag-filter'


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

const TagContainer = styled.div`
    display: inline-block;
    width: 100%;


` 

class Portfolio  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            tags: [],
        };

    }

  
    componentDidMount() {
        let tempTags = []
        let stringLog = []
        let _cards = []

        for (let j = 0; j < this.props.thumbnailData.length; j++) {
            _cards.push(<Card active = {true} key={j} {...this.props.thumbnailData[j].node} ></Card>)
            for (let i = 0; i <  this.props.thumbnailData[j].node.projecttags.tags.length; i++) {
                if (!stringLog.includes(this.props.thumbnailData[j].node.projecttags?.tags[i]) && this.props.thumbnailData[j].node.projecttags?.tags[i] != undefined){
                    tempTags.push(<TagFilter toogleMap = {this.toogleMap} key={Math.random()} data = {this.props.thumbnailData[j].node.projecttags?.tags[i]}></TagFilter>)
                    stringLog.push(this.props.thumbnailData[j].node.projecttags?.tags[i])
                }
            }
        }       
        this.setState({ tags: tempTags, cards: _cards});
    }

    componentWillUnmount() {
  
    }

    toogleMap = (val) => {
        let _cards = []
        console.log(val.value)

        for (let j = 0; j < this.state.cards.length; j++) {
            let status = false;
            for (let i = 0; i <  this.state.cards[j].props.projecttags.tags.length; i++) {
                if (val.target.value === this.state.cards[j].props.projecttags.tags[i]) {
                    status = true;
                } 
            }
            _cards.push(<Card active = {status} key={j} {...this.props.thumbnailData[j].node} ></Card>)
        }
        
        this.setState({ cards: _cards});
        
    }


    render() {
        return (
            <Container>     
                <Title><Box><Text>Projects</Text></Box></Title>
                <TagContainer>
                    {this.state.tags}
                </TagContainer>
                <Grid> 
                    {this.state.cards}
                </Grid>
            </Container>
        )
    }

}

export default Portfolio

