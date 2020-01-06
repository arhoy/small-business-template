import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Bold } from '../reusableStyles/typography/Typography';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomP,
  ImageContainerSlider,
  CustomPHome,
  StyledImage,
} from './HomeStyling';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import NoStyleLink from '../Links/NoStyleLink';
import Slider from 'react-slick';
import SliderContainer2 from '../reusableStyles/slider/SliderContainer2';

const CustomContainer = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const AboutOurFood = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const myImages = useStaticQuery(graphql`
    {
      heroImage1: file(relativePath: { eq: "recipes/Beef_Kebab__Soya.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage2: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage3: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage4: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage5: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage6: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage7: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage8: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage9: file(relativePath: { eq: "recipes/Beef_Kebab_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <CustomContainer>
      <div>
        <Slider {...settings}>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage1.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage2.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage3.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage4.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage5.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage6.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage7.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage8.childImageSharp.fluid} />
          </SliderContainer2>
          <SliderContainer2>
            <StyledImage fluid={myImages.heroImage9.childImageSharp.fluid} />
          </SliderContainer2>
        </Slider>
      </div>

      <BlurbContainer>
        <CustomH2>About Our Food</CustomH2>
        <CustomP>From Our Kitchen to Your Table</CustomP>
        <CustomPHome>
          Our food is derived from a combination of
          <Bold> popular street foods </Bold> enjoyed in most Regions in
          Cameroon. However, am putting my spin on it. Incorporated in our food
          is a mixture of blended African nuts, infused with scented leaves that
          upshots an aromatic flavour having you taste your lips in
          anticipation.
        </CustomPHome>
        <CustomPHome>
          Our food is mostly done on grill...the smokey tender taste. The exotic
          lingering flavour. You know what they say about going black...HA!
          (CHARCOAL). The taste just can't be beat! Our food is mostly
          <Bold> spicy </Bold> but can be done to accommodate your tolerance to
          heat. Food is cooked in our home boosting Hygienization, Warmth and
          LOVE.{' '}
          <span role="img" aria-label="">
            ❤️
          </span>
        </CustomPHome>
        <ButtonStyle2>
          <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
    </CustomContainer>
  );
};

export default AboutOurFood;
