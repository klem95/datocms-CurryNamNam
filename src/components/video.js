import React from 'react'
import styled from 'styled-components';

const Container = styled.div `  
    width: 100%;
    height: 100%;
`


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <Container> 
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          width= "80%"
          height= "80%"
        />
    </Container>
  )

  export default Video

