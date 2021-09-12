import React,{ useEffect } from 'react'
import styled from 'styled-components';
import image from '../assets/banner_img.jpeg'
import { Container, BackgroundContainer, TextContainer, LettersAnimation, Intro } from '../styles/pages/searchChurch.styled'


const SearchChurch = () => {

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
                            El nombre de nuestra congregación tiene una estrecha relación con el llamado que recibimos de parte 
                            de nuestro Señor y nuestra forma de hacer iglesia.
                        </q>
                    </TextContainer>
                </BackgroundContainer>
                <LettersAnimation className="letter__animations">
                    <p>Busco Iglesia</p>
                </LettersAnimation>
            </Intro>
            <TextContainer>
                <p>
                    En Renacer estamos preocupados por el bienestar espiritual de nuestra comunidad, 
                    si por alguna razón no tienes casa espiritual, considéranos tu familia. 
                </p>
                <p>
                    En nuestra iglesia oramos y trabajamos por el crecimiento integral de cada persona, 
                    a través de reuniones de oración, cursos de crecimiento y formación espiritual, 
                    discipulados intensivos y reuniones de adoración. Buscamos que la Palabra y la
                    Presencia de Dios nos abrace y levante.
                </p>
                
                
            </TextContainer>
        </Container>
    )
}

export default SearchChurch
