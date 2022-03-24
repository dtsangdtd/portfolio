import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1--title {
    font-size: 2.3rem;
  }
  .footer__col1--content {
    font-size: 1.8rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    padding-top: 3rem;
    padding-bottom: 2rem;
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className='container'>
        <div className='footer__col1'>
          <h2 className='footer__col1--title'>Duong Thanh Sang</h2>
          <p className='footer__col1--content'>
            A freelance web designer and developer from Viet Nam. I always make
            websites that have unique designs and also has a good performance
            rate.
          </p>
        </div>
        <div className='footer__col2'>
          <FooterCol
            heading='Important Links'
            content={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                title: 'About',
                link: '/about',
                type: 'Link',
              },
              {
                title: 'Project',
                link: '/project',
                type: 'Link',
              },
              {
                title: 'Contact',
                link: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className='footer__col3'>
          <FooterCol
            heading='Contact Info'
            content={[
              {
                title: '+842354461',
                link: 'tel: +842354461',
              },
              {
                title: 'dtsangdtd@gmail.com',
                link: 'mailto: dtsangdtd@gmail.com',
              },
              {
                title: 'Q7, Vietnam',
                link: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className='footer__col4'>
          <FooterCol
            heading='Social Links'
            content={[
              {
                title: 'Facebook',
                link: 'https://www.facebook.com/dtsangdtd/',
              },
              { title: 'Twitter', link: 'https://www.facebook.com/dtsangdtd/' },
              {
                title: 'Instagram',
                link: 'https://www.instagram.com/dtsang.kai24/',
              },
            ]}
          />
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          {' '}
          Copyright © 2021 - Duong Thanh Sang | Contact: dtsangdtd@gmail.com
        </div>
      </div>
    </FooterStyle>
  );
}
