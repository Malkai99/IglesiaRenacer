import styled from 'styled-components';
import { device } from '../utilities/media_queries.styled';

export const ServicesContainer = styled.div`
    position: relative;
    width: 100%;

    ul{
        list-style: none;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        overflow: hidden;
        @media ${device.md}{
            flex-direction: row;
        }
        li{
            width: 100%;
            height: 300px;
            @media ${device.md}{
                width: 33.33%;
                height: 400px;
            }
        }
    }
    

    .service__element{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;

        img{
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: contain;
            object-fit: cover;
            transform: scale(1);
            opacity: .5;
            transition: all .5s ease-in-out;
        }

        img:hover{
            transform: scale(1.1);
            opacity: 1;
        }

        .text__container{
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .title{
                font-size: 28px;
                font-weight: 900;
                font-style: italic;
                color: transparent;
                text-transform: uppercase;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: white;
                margin: 0;
            }
            .subtitle {
                font-size: 16px;
                text-align: center;
            }

        }
    }
`;