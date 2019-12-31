import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import { Bold } from '../reusableStyles/typography/Typography';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomP,
  ImageContainer,
  StyledImage,
  CustomPHome,
} from './HomeStyling';

const CustomContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Contact = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "plantains2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <CustomContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn="soft" />
      </ImageContainer>
      <BlurbContainer>
        <CustomH2>Contact</CustomH2>
        <CustomP>We would love to hear from you</CustomP>
        <CustomPHome>
          We can be reached via email <Bold>claudinearrey@gmail.com.</Bold>
        </CustomPHome>
        <CustomPHome>
          For a quicker response text or call <Bold>(587) 920 9921 </Bold>
        </CustomPHome>
        <CustomPHome>
          This being a passion we are excited to share to you all, comes with
          its own limitations apparently. We apologise ahead. We are however
          available to cater three days a week Thursday, Friday and Saturdays.
          Orders most be placed a week prior to your event date. There are
          however a handful of West African Traditional dishes we can cater to
          not outlined here. Hit us up and LETS SERVE YOUR IMAGINATION!
        </CustomPHome>
      </BlurbContainer>
    </CustomContainer>
  );
};

export default Contact;
