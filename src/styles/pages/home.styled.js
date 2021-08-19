import styled from 'styled-components';
import { device } from '../utilities/media_queries.styled';

export const HomeIntro = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    
    @media ${device.sm}{
        max-height: 1024px;
    }
    @media ${device.xlg}{
        max-height: 1080px;
    }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #282c34;
  .image__container{
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const LettersAnimation = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 50px;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 750ms ease-in-out 100ms;
    &.running{
        opacity: 1;
        transform: translateX(0%);
    }
    p{
        /* opacity: 0;
        transition: opacity 250ms ease-in-out 100ms ; */
        font-size: 52px;
        text-align: left;
        padding-left: 10px;
        font-family: 'Montserrat', sans-serif;
        font-style: italic;
        font-weight: 900;
        color: transparent;
        text-transform: uppercase;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        margin: 0;
        z-index: 2;

        @media ${device.md}{
            font-size: 100px;
        }
    }
`;

export const SocialsContainer = styled.div`
    position: fixed;
    width: auto;
    height: auto;
    right: 20px;
    bottom: 0;
    z-index: 10;
    .content__elements{
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: column;
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            /* background-color: rgba(255,255,255,.5); */
            color: black;
            margin: 15px 0;
            width: 100%;
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                cursor: pointer;
                width: 100%;
            }
            img{
                width: 30px;
                /* margin: 0 auto; */
            }
        }
    }

`;

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px 0;
`;