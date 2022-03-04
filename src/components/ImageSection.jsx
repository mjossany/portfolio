import React from 'react';
import styled from 'styled-components';
import image from '../images/about-me.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={image} alt="self" />
      </div>
      <div className="right-content">
        <h4>
          I am
          {' '}
          <span>Lorem Ipsum</span>
        </h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis iure culpa, ducimus corporis non exercitationem
          officiis nihil deserunt quaerat! Perferendis fuga,
          nulla numquam maxime sapiente ad,
          hic reprehenderit praesentium deserunt neque quos repellat?
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>: 27</p>
            <p>: Brazilian</p>
            <p>: Portuguese / English</p>
            <p>: Rio de Janeiro</p>
            <p>: Development Student</p>
          </div>
        </div>
        <PrimaryButton title="Download Cv" />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
margin-top: 5rem;
  display: flex;
  .left-content {
    width: 100%;
    height: 60vh;
    img {
      position: relative;
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    width: 100%;
    .about-info {
      padding-bottom: 1.4rem;
      display: flex;
      .info-title {
        padding-right: 2rem;
        p {
          font-weight: 600;
        }
      }
      .info-title, .info {
        p {
          padding: .3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
