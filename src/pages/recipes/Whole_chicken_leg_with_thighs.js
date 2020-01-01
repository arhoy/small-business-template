import React from 'react';
import { graphql } from 'gatsby';
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

export const query = graphql`
  {
    heroImage: file(
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

const Whole_chicken_leg_with_thighs = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <Container>
            <Title>{recipeData && recipeData[1].title}</Title>
            <CustomImage fluid={data.heroImage.childImageSharp.fluid} />
            <SubContainer>
              <Description>
                {recipeData && recipeData[1].description}
              </Description>
              <Price>${recipeData && recipeData[1].price.toFixed(2)}</Price>
              {recipeData && recipeData[1].calories && (
                <Calories>
                  Calories: {` `}
                  {recipeData[1].calories}
                </Calories>
              )}
            </SubContainer>
          </Container>
        </Container1200>
      </Section>
    </Layout>
  );
};

export default Whole_chicken_leg_with_thighs;
