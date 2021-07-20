import React from 'react'
import { ContactBlock } from '../styles/contact.styled'

const Contact = () => {
    return (
        <ContactBlock className='contact__block'>
            <h2 className='title' >Contactanos</h2>
            <ul className='contacts__list' >
                <li className='contact__container' >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU" alt="" />
                    <div className="contact__info">
                        <p className="name"> Pastor Erubiel Ortiz</p>
                        <a href='mailto:pastorerubielortiz@gmail.com' ><p className="email"> pastorerubielortiz@gmail.com</p></a>
                    </div>
                </li>
                <li className='contact__container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU" alt="" />
                    <div className="contact__info">
                        <p className="name">Pastora Gaby de la Peña</p>
                        <a href='mailto:dlpgaby@gmail.com' ><p className="email">dlpgaby@gmail.com</p></a>
                    </div>
                </li>
            </ul>
            <div className="genearl__contact">
                <p>Iglesia Renacer</p>
                <p>8442361082</p>
            </div>

        </ContactBlock>
    )
}

export default Contact
