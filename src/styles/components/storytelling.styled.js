import styled from 'styled-components';
import { device } from '../utilities/media_queries.styled';

export const StoryBanner = styled.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    height: 300px;
    background-color: #282c34;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 29px 10px rgba(0,0,0,0.75);
    q{
        width: 85%;
        font-family: 'Montserrat', sans-serif;
        font-style: italic;
        letter-spacing: .5px;
        font-size: 24px;
        line-height: 32px;
        margin: 0;
        @media ${device.sm}{
            font-size: 38px;
            line-height: 42px;
        }
        @media ${device.lg}{
            font-size: 42px;
            line-height: 58px;
            padding: 0 20%;
        }
    }   
`;