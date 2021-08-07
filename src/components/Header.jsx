 import React from 'react'
import logo from '../assets/logo-renacer.png';
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
        console.log('aksmdkl ', document.querySelector('.modal__menu').classList.contains('is-open'))
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
                <img src={logo} alt="" />
            </Logo>
            <HeaderLinks className='header__links'>
                <LinkElement><a ><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Estos Somos</p></a></LinkElement>
                <LinkElement><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Busco Iglesia</p></a></LinkElement>
                <LinkElement><a href="https://www.youtube.com/IglesiaRenacerSaltillo" target="_blank"><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Escuchanos</p></a></LinkElement>
                <LinkElement><a href="#contact__section" ><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Contactanos</p></a></LinkElement>
                <LinkElement><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Media</p></a></LinkElement>
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
                        <LinkElement><a ><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Estos Somos</p></a></LinkElement>
                        <LinkElement><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Busco Iglesia</p></a></LinkElement>
                        <LinkElement><a href="https://www.youtube.com/IglesiaRenacerSaltillo" target="_blank"><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Escuchanos</p></a></LinkElement>
                        <LinkElement><a href="#contact__section" ><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Contactanos</p></a></LinkElement>
                        <LinkElement><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Media</p></a></LinkElement>
                    </MenuLinks>
                </MenuContainer>
            </MenuBackground>

        </HeaderContainer>
    )
}

export default Header
