import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import housing from '../assets/images/housing.jpg';
const ProjectItemsStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__infor {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
export default function ProjectItems({
  img = housing,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemsStyle>
      <Link to='/project' className='projectItem__img'>
        <img src={img} alt='project' />
      </Link>
      <div className='projectItem__infor'>
        <Link to='#'>
          <h3 className='projectItem__title'>{title}</h3>
        </Link>
        <p className='projectItem__desc'>{desc}</p>
      </div>
    </ProjectItemsStyle>
  );
}
