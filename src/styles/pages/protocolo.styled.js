import styled from 'styled-components';
import { device } from '../utilities/media_queries.styled'

export const Container = styled.div`
    width: 100%;
    height: 100%;
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
    filter: blur(2px);
    object-fit: cover;
  }
  .background{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: rgba(0,0,0,.5);
      z-index: 5;
  }
`;

export const TextContainer = styled.div`
    position: relative;
    width: 85%;
    margin: 30px auto;
    text-align: left;
    p{
        font-size: 22px;
    }
    q{
        font-size: 22px;
        letter-spacing: .25px;
    }
    &.intro{
        position: absolute;
        z-index: 5;
        top: 42%;
        left: 5%;
        width: 85%;
        opacity: 0;
        transition: opacity 750ms ease-in-out 250ms;
        &.visible{
            opacity: 1;
        }
        @media ${device.sm}{
            width: 60%;
        }
        @media ${device.md}{
            width: 45%;
        }
        q{
            letter-spacing: .5px;
            font-weight: bold;
            font-size: 14px;
            @media ${device.sm}{
                font-size: 22px;
            }
        }
    }
`;

export const LettersAnimation = styled.div`
    position: absolute;
    z-index: 6;
    top: 150px;
    left: 5%;
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
        font-size: 48px;
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

        @media ${device.sm}{
            font-size: 92px;
        }
        @media ${device.md}{
            font-size: 100px;
        }
    }
`;

export const Intro = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    @media ${device.sm}{
        height: 100vh;
    }
`;