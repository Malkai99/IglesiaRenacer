import React from 'react'
import styled from 'styled-components';
import PlayVideo from '../assets/svgs/PlayVideo'
import poster from '../assets/poster.jpg'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    video{
        width: 100%;
        height: 100%;
    }
    .play__btn{
        fill: white;
        width: 100%;
        height: 100%;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    z-index: 5;
    &.hide{
        display: none;
    }
`;

const VideoElement = ({ srcMedia }) => {

    function handelClick(e) {
        e.currentTarget.classList.add('hide')
        const video = document.getElementById('video__banner')
        video.play();
        video.controls = true;
    }

    return (
        <Container>
            <ButtonContainer onClick={(e) => handelClick(e)} >
                <PlayVideo  className='play__btn' />
            </ButtonContainer>
            <video id='video__banner' poster={poster} preload="metadata">
                <source src={srcMedia} type="video/mp4" />
            </video>
        </Container>
    )
}

export default VideoElement
