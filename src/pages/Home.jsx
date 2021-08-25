import { useEffect } from 'react';
import Layout from '../components/Layout';
import slide from '../assets/slide_home.jpg';
import slide2 from '../assets/slide.jpg'
import Facebook from '../assets/svgs/facebook'
import Instagram from '../assets/svgs/instagram'
import Youtube from '../assets/svgs/youtube'
import ServicesBanner from '../components/ServicesBanner'
import Contact from '../components/Contact'
import Location from '../components/Location'
import { HomeIntro, VideoContainer, BackgroundContainer, LettersAnimation, SocialsContainer } from '../styles/pages/home.styled';
import Storytelling from '../components/Storytelling';
import YoutubeComponent from '../components/YoutubeComponent';
import credentials from '../credentials'

const Home = () => {

    useEffect(() => {
        document.querySelector('.letter__animations').classList.add('running')
      },);
    

    return (
        <>

            <HomeIntro>
                {/*BACKGROUND  */}
                <BackgroundContainer className="banner__container" >
                    <img className="image__container" style={{backgroundImage: `url(${slide})`}}></img>
                </BackgroundContainer>

                {/* LETTER ANIMATION */}
                <LettersAnimation className="letter__animations">
                    <p>Iglesia Renacer</p>
                </LettersAnimation>
            </HomeIntro>

            <Storytelling />

            {/*BACKGROUND  */}
            {/* <div className="banner__container image__flat" >
                <div className="image__container" style={{backgroundImage: `url(${slide2})`}}></div>
            </div> */}

            {/* Banner servicios */}
            <ServicesBanner />

            {/* Banner video Intro */}
            <VideoContainer>
                <YoutubeComponent embedId={"3G7Ax4HN4EU"} />
            </VideoContainer>

            {/* Contactanos */}
            <Contact />

            {/* Locaction */}
            {/* <Location containerElement={<div style={{height: '400px'}} />}
            mapElement={<div style={{height: '100%'}} />}
            loadingElement= {<div style={{ height: `100%` }} />}
            googleMapURL={`http://maps.google.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`} /> */}

            {/* SOCIALS */}
            <SocialsContainer className="social__container">
                <ul className='content__elements'>
                    <li className='facebook__container'>
                    <a href="https://www.facebook.com/RenacerSaltillo" target='_blank'>
                        <Facebook fill={'white'} width={'30px'} />
                    </a>
                    </li>
                    <li className='instagram__container'>
                    <a href="https://www.instagram.com/renacersaltillo" target='_blank'>
                        <Instagram fill={'white'} width={'30px'} />
                    </a>
                    </li>
                    <li className='youtube__container'>
                    <a href='https://www.youtube.com/IglesiaRenacerSaltillo' target='_blank'>
                        <Youtube fill={'white'} width={'30px'} />
                    </a>
                    </li>
                </ul>
            </SocialsContainer>
      
        </>
    )
}

export default Home
