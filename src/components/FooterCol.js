import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;
export default function FooterCol({
  heading = 'this is heading',
  content = [
    {
      type: 'Link',
      title: 'Home',
      link: '/home',
    },
    {
      type: 'Link',
      title: 'Home',
      link: '/home',
    },
  ],
}) {
  return (
    <FooterColStyle>
      <h2 className='heading'>{heading}</h2>
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            {item.type == 'Link' ? (
              <Link to={item.link}>{item.title}</Link>
            ) : (
              <a href={item.link} target='_blank' rel='noreferrer'>
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </FooterColStyle>
  );
}
