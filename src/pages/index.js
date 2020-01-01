import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layouts/Layout';
import {
  Section,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';
import { H1 } from '../components/reusableStyles/typography/Typography';

import AboutUs from '../components/home/AboutUs';
import AboutOurFood from '../components/home/AboutOurFood';
import Catering from '../components/home/Catering';
import Contact from '../components/home/Contact';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 92vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  background-size: cover;
  background-position: top;
  align-items: top;
  opacity: 1 !important;
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeroContent = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

const CustomH1 = styled(H1)`
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-shadow: -3px 3px 0 ${props => props.theme.colors.black};
  padding: 0.75rem 1rem;
  background: ${props => props.theme.colors.blackTransparent};
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <Layout full={true}>
      <HerosContainer>
        <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
          <HeroContentContainer>
            <HeroContent>
              <CustomH1>Welcome to Cameroon Street Food</CustomH1>
            </HeroContent>
          </HeroContentContainer>
        </HeroBackgroundImage>
      </HerosContainer>

      <SectionGrey>
        <AboutUs />
      </SectionGrey>
      <Section>
        <AboutOurFood />
      </Section>
      <SectionGrey>
        <Catering />
      </SectionGrey>
      <Section>
        <Contact />
      </Section>
    </Layout>
  );
};

export default Home;
