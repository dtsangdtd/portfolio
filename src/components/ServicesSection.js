import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';

const ServicesSectionStyle = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function ServicesSection() {
  return (
    <ServicesSectionStyle>
      <div className='container'>
        <SectionTitle subheading='What i will do for you' heading='Services' />
        <div className='services__allItems'>
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title='web design'
            des='I do ui/ux design for the website that helps website to get a unique look.'
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title='web dev'
            des='I also develop the websites. I create high performance website with blazing fast speed.'
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title='app Dev'
            des='I develop mobile application. I create mobile app with eye catching ui. '
          />
        </div>
      </div>
    </ServicesSectionStyle>
  );
}
