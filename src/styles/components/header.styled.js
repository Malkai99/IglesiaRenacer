import styled from 'styled-components';
import { device } from '../utilities/media_queries.styled';

export const HeaderContainer = styled.header`
    position: absolute;
    z-index: 10;
    top: 0;
    margin-top: 20px;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    
    ul {
        li{
            cursor: pointer;
            list-style: none;
            margin: 0 10px;
        }
    }

    .session__container{
        display: none;
        @media ${device.md}{
            display: block;
        }
    }

`;

export const Logo = styled.div`
    width: 100px;
    height: 70px;
    position: relative;
    @media ${device.sm}{
        width: 150px;
        height: auto;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    a{
        width: 100%;
        height: 100%;
    }
`;

export const HeaderLinks = styled.ul`
    display: none;
    @media ${device.md}{
        position: relative;
        display: block;
        width: 80%;
        padding: 0;
        margin: 0 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const LinkElement = styled.li`
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        display: flex;
        justify-self: center;
        align-items: center;
        width: 100%;
        position: relative;
        transition: color .25s ease-in-out;
        color: white;
    }
    p.hover{
    color: #FFDB58;
    }
`;

export const BurgerMenu = styled.div`
    position: absolute;
    right: 5%;
	width:30px;
	height: 20px;
	z-index: 2;
    pointer-events: all;
    @media ${device.md}{
        display: none;
    }
    span{
        pointer-events: none;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        display: block;
        position: absolute;
        background: #fff;
        transition: all 0.25s ease;
        transform-origin : 0px 100%;
    }
    span:nth-child(2){
	    top: calc(50% - 2px);
        opacity: 1;
    }
    span:nth-child(3){
        bottom: 0;
    }  

    &:hover{
        span{
            background: #FFDB58;
        }
    }
    &.close__btn{
        span{
            transform-origin : inherit;
            top: 50%;
        }
        span:nth-child(1){
            transform: rotate(45deg);
            bottom: 0;
        }
        span:nth-child(2){
            opacity: 0;
        }
        span:nth-child(3){
            bottom: inherit;
            transform: rotate(-45deg);
        }
    }
`;

export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #282c34;
    transform: translateX(100%);
    transition: all .25s ease-in-out .25s;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        list-style: none;
    }
`;

export const MenuBackground = styled.div`
    position: fixed;
    display: none;
    top: 0;
    opacity: 0;
    transform: translateX(100%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    transition: all .25s ease-in-out;
    &.is-open{
        display: block;
        opacity: 1;
        transform: translateX(0%);
        .menu__container{
            transform: translateX(0%);
        }
    }
`;

export const MenuLinks = styled.ul`
    ${LinkElement}{
        p{
            font-size: 32px;
        }
    }
`;

