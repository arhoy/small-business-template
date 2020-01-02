import React from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import Layout from '../../components/layouts/Layout';
import {
  Section,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';

import {
  Container,
  SubContainer,
  CustomImage,
  Title,
  Description,
  Price,
  Calories,
} from '../../components/recipes/EachRecipePage';
import recipeData from '../../../apis/recipeData';
import SliderContainer2 from '../../components/reusableStyles/slider/SliderContainer2';

export const query = graphql`
  {
    heroImage1: file(relativePath: { eq: "recipes/chicken_drumsticks.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    heroImage2: file(relativePath: { eq: "recipes/chicken_wing.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    heroImage3: file(
      relativePath: { eq: "recipes/Whole_chicken_leg_with_thighs.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const chicken_drumsticks = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout>
      <Section>
        <Container1200>
          <Container>
            <Title>{recipeData && recipeData[3].title}</Title>
            <Slider {...settings}>
              <SliderContainer2>
                <CustomImage fluid={data.heroImage1.childImageSharp.fluid} />
              </SliderContainer2>
              <SliderContainer2>
                <CustomImage fluid={data.heroImage2.childImageSharp.fluid} />
              </SliderContainer2>
              <SliderContainer2>
                <CustomImage fluid={data.heroImage3.childImageSharp.fluid} />
              </SliderContainer2>
            </Slider>

            <SubContainer>
              <Description>
                {recipeData && recipeData[3].description}
              </Description>
              <Price>${recipeData && recipeData[3].price.toFixed(2)}</Price>
              {recipeData && recipeData[3].calories && (
                <Calories>
                  Calories: {` `}
                  {recipeData[3].calories}
                </Calories>
              )}
            </SubContainer>
          </Container>
        </Container1200>
      </Section>
    </Layout>
  );
};

export default chicken_drumsticks;
