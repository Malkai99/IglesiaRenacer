import React from 'react'
import logo from '../assets/logo-renacer.png';
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLinks, LinkElement, BurgerMenu, Logo, MenuLinks,
     MenuBackground, MenuContainer } from '../styles/components/header.styled';

const Header = () => {
    
    function overLink(event){
        // console.log('selected ', event.currentTarget)
        if(event.currentTarget.classList.contains('hover')){
          event.currentTarget.classList.remove('hover')
        }else{
          event.currentTarget.classList.add('hover')
        }
    }
    
    function handleMenu(){
        // console.log('aksmdkl ', document.querySelector('.modal__menu').classList.contains('is-open'))
        if(document.querySelector('.modal__menu').classList.contains('is-open')){
            document.querySelector('.modal__menu').classList.remove('is-open')
            document.getElementById('burger__menu').classList.remove('close__btn')
        }else{
            document.querySelector('.modal__menu').classList.add('is-open')
            document.getElementById('burger__menu').classList.add('close__btn')
        }
    }
    

    return (
        <HeaderContainer className="header__container">
            <Logo className="logo__container">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </Logo>
            <HeaderLinks className='header__links'>
                <LinkElement><a href='/volviendo-a-casa'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Volviendo a Casa</p></a></LinkElement>
                <LinkElement><a href='/creemos'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Creemos</p></a></LinkElement>
                <LinkElement><a href='/protocolo-covid'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Protocolo COVID</p></a></LinkElement>
                <LinkElement><a href='/busco-iglesia'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Busco Iglesia</p></a></LinkElement>
                <LinkElement><a href="https://www.youtube.com/IglesiaRenacerSaltillo" target="_blank"><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Escúchanos</p></a></LinkElement>
                <LinkElement><a href='/media'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Media</p></a></LinkElement>
                <LinkElement><a href="/#contact__section" ><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Contáctanos</p></a></LinkElement>
            </HeaderLinks>
            {/* <div className="session__container">
                <p>Ingresa</p>
            </div> */}
            <BurgerMenu id='burger__menu' onClick={() => handleMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </BurgerMenu>
            <MenuBackground className="modal__menu">
                <MenuContainer className="menu__container">
                    <MenuLinks>
                    <LinkElement><a href='/volviendo-a-casa'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Volviendo a Casa</p></a></LinkElement>
                    <LinkElement><a href='/creemos'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Creemos</p></a></LinkElement>
                    <LinkElement><a href='/protocolo-covid'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Protocolo COVID</p></a></LinkElement>
                    <LinkElement><a href='/busco-iglesia'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Busco Iglesia</p></a></LinkElement>
                    <LinkElement><a href="https://www.youtube.com/IglesiaRenacerSaltillo" target="_blank"><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Escúchanos</p></a></LinkElement>
                    <LinkElement><a href='/media'><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Media</p></a></LinkElement>
                    <LinkElement><a href="/#contact__section" ><p onClick={() => handleMenu()} onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Contáctanos</p></a></LinkElement>
                    </MenuLinks>
                </MenuContainer>
            </MenuBackground>

        </HeaderContainer>
    )
}

export default Header
