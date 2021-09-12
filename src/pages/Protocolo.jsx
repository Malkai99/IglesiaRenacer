import React,{ useEffect } from 'react'
import image from '../assets/protocoloCovid__compress.jpg'
import { Container, BackgroundContainer, TextContainer, LettersAnimation, Intro } from '../styles/pages/protocolo.styled'

const Protocolo = () => {

    useEffect(() => {
        document.querySelector('.letter__animations').classList.add('running')
        document.querySelector('.intro').classList.add('visible')
      },[]);

    return (
        <Container>
            <Intro>
                <BackgroundContainer className="banner__container" >
                    <div className="background"></div>
                    <img src={image} className="image__container"></img>
                    <TextContainer className='intro'>
                        <q>
                            En Renacer contamos con todas las medidas de higiene y seguridad para que tú y tus acompañantes estén seguros y tranquilos durante cada momento de la reunión.
                        </q>
                    </TextContainer>
                </BackgroundContainer>
                    <LettersAnimation className="letter__animations">
                        <p>Protocolo Covid</p>
                    </LettersAnimation>
            </Intro>
            <TextContainer>
                <p>
                Favor de tomar en cuenta las siguientes regulaciones. ¡Recuerda que juntos nos cuidamos mejor!
                </p>
                <ul>
                    <li>Usa tu cubrebocas en todo momento.</li>
                    <li>Mantén una sana distancia.</li>
                    <li>Evita saludar de mano, abrazo o beso.</li>
                    <li>Usa el asiento asignado por nuestro equipo.</li>
                </ul>
                
            </TextContainer>
        </Container>
    )
}

export default Protocolo
