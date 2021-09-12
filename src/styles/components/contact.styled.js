import styled from 'styled-components';
import { device } from '../utilities/media_queries.styled';

export const ContactBlock = styled.div`
  position: relative;
  padding: 0 5%;
  margin-bottom: 50px;
  @media ${device.lg}{
    margin-bottom: 80px;
  }
  @media ${device.xlg}{
    margin-bottom: 100px;
  }

  .title{
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 900;
    font-style: italic;
    color: transparent;
    text-transform: uppercase;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    text-align: center;
    @media ${device.sm}{
      font-size: 48px;
      text-align: left;

    }
  }

  .contacts__list{
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media ${device.md}{
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .contact__container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    /* padding: 0 20px; */
    @media ${device.md}{
      margin: 0;
      flex-direction: row;
      margin-left: 30px;
    }
    .image__container{
      width: 120px;
      height: 120px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }

    }
  }

  .contact__info{
    text-align: center;
    @media ${device.md}{
      margin-left: 20px;
      text-align: left;
    }
    a{
      color: white;
      text-decoration: none;
      transition: color .25s ease-in-out;
    }
    a:hover{
      color: #FFDB58;
    }
    .name{
      font-size: 22px;
    }
    .email{
      font-size: 18px;
    }
  }

  .general__contact{
    display: flex;
    justify-content: center;
    align-items: center;
    .contact__info{
      margin-left: 10px;
    }
    .image__container{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 1px solid white;
      /* background-color: black; */
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;