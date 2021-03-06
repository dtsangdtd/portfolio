import React from 'react';
import HeroImage from '../assets/images/backGround.jpg';
import Button from './Button';
import PText from './PText';
import HeroMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';
import Typical from 'react-typical';
const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__image {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__infor {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social_indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__image {
      height: 300px;
    }
    .hero__infor {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0px;
      width: 29px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero'>
        <div className='container'>
          <h1 className='hero__heading'>
            <span>Hello I'm</span>
            <span className='hero__name'>
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Duong Thanh Sang',
                  1000,
                  'Web Developer',
                  1000,
                  'Designer',
                  1000,
                ]}
              />
            </span>
          </h1>
          <div className='hero__image'>
            <img src={HeroImage} alt='' />
          </div>
          <div className='hero__infor'>
            <PText>
              I am working as a freelance web designer and developer for 2
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnLink='/project' btnText='See my works' outline={false} />
          </div>
          <div className='hero__social'>
            <div className='hero__social_indicator'>
              <p>Follow</p>
              <img src={HeroMediaArrow} alt='' />
            </div>
            <div className='hero_social_text'>
              <ul>
                <li>
                  <a
                    href='https://www.facebook.com/dtsangdtd'
                    target='_blank'
                    rel='noreferrer'
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/dtsangdtd'
                    target='_blank'
                    rel='noreferrer'
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/dtsangdtd'
                    target='_blank'
                    rel='noreferrer'
                  >
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='hero__scrollDown'>
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt='' />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
