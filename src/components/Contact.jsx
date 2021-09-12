import React from 'react'
import { ContactBlock } from '../styles/components/contact.styled'
import gaby from '../assets/images/contact/gaby.jpeg'
import erubiel from '../assets/images/contact/erubiel.jpeg'
import logoRenacer from '../assets/logo-renacer.png'

const Contact = () => {
    return (
        <ContactBlock className='contact__block' id='contact__section'>
            <h2 className='title' >Contáctanos</h2>
            <ul className='contacts__list' >
                <li className='contact__container' >
                    <div className="image__container">
                        <img src={erubiel} alt="" />
                    </div>
                    <div className="contact__info">
                        <p className="name"> Pastor Erubiel Ortiz</p>
                        <a href='mailto:pastorerubielortiz@gmail.com' ><p className="email"> pastorerubielortiz@gmail.com</p></a>
                    </div>
                </li>
                <li className='contact__container'>
                    <div className="image__container">
                        <img src={gaby} alt="" />
                    </div>
                    <div className="contact__info">
                        <p className="name">Pastora Gaby de la Peña</p>
                        <a href='mailto:dlpgaby@gmail.com' ><p className="email">dlpgaby@gmail.com</p></a>
                    </div>
                </li>
            </ul>
            <div className="general__contact">
                <div className="image__container">
                    <img src={logoRenacer} alt="" />
                </div>
                <div className="contact__info">
                    <p>Iglesia Renacer</p>
                    <a href="tel:+528442361082">
                        <p>8442361082</p>
                    </a>
                </div>
            </div>

        </ContactBlock>
    )
}

export default Contact
