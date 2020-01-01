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
    heroImage: file(relativePath: { eq: "recipes/plantains2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const plantains2 = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <Container>
            <Title>{recipeData && recipeData[10].title}</Title>
            <CustomImage fluid={data.heroImage.childImageSharp.fluid} />
            <SubContainer>
              <Description>
                {recipeData && recipeData[10].description}
              </Description>
              <Price>${recipeData && recipeData[10].price.toFixed(2)}</Price>
              {recipeData && recipeData[10].calories && (
                <Calories>
                  Calories: {` `}
                  {recipeData[10].calories}
                </Calories>
              )}
            </SubContainer>
          </Container>
        </Container1200>
      </Section>
    </Layout>
  );
};

export default plantains2;
