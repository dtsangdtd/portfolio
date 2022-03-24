import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/greenctg.jpg';
import styled from 'styled-components';
const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutImg {
    border: 2px solid var(--gray-1);
    height: 500px;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className='container'>
        <div className='AboutSection__left'>
          <SectionTitle
            className='section__title'
            subheading='Let me introduce myself'
            heading='About me'
          />
          <PText>
            I am a freelance website designer and developer from Vietnam. I
            create professional websites. I love art and always try to show
            unique views to the audience through my design.
          </PText>
          <div className='aboutSection__buttons'>
            <Button btnLink='/project' btnText='Works' />
            <Button btnLink='/about' btnText='Read More' outline />
          </div>
        </div>
        <div className='aboutSection__right'>
          <img className='aboutImg' src={AboutImg} alt='Img' />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
