import React, { useEffect, useState } from 'react';

import { graphql } from 'gatsby';
import Recipe from '../components/recipes/Recipe';
import Layout from '../components/layouts/Layout';
import recipeData from '../../apis/recipeData';
import { ProductLayout1 } from '../components/products/ProductContainerStyles/ProductContainerStyle';
import {
  H1,
  PCenter,
} from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';

export const query = graphql`
  {
    Beef_Kebab__Soya: file(
      relativePath: { eq: "recipes/Beef_Kebab__Soya.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Whole_chicken_leg_with_thighs: file(
      relativePath: { eq: "recipes/Whole_chicken_leg_with_thighs.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    chicken_wing: file(relativePath: { eq: "recipes/chicken_wing.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    chicken_drumsticks: file(
      relativePath: { eq: "recipes/chicken_drumsticks.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Hard_Grilled_plantains: file(
      relativePath: { eq: "recipes/Hard_Grilled_plantains.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    MaEnows_Riblets: file(relativePath: { eq: "recipes/MaEnows_Riblets.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Whole_Roasted_fish: file(
      relativePath: { eq: "recipes/Whole_Roasted_fish.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    Whole_Roasted_fish_2: file(
      relativePath: { eq: "recipes/Whole_Roasted_fish_2.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Miyondo: file(relativePath: { eq: "recipes/Miyondo.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Accra_Bananas: file(relativePath: { eq: "recipes/Accra_Bananas.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    plantains2: file(relativePath: { eq: "recipes/plantains2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Whole_grilled_plantains: file(
      relativePath: { eq: "recipes/Whole_grilled_plantains.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Recipes = ({ data }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
    console.log(recipes);
  }, [recipes]);
  return (
    <Layout>
      <Section>
        <H1 style={{ paddingBottom: '2rem' }}>Our Recipes</H1>
        <PCenter>
          Hover and Click On Each One of Our Delicious Recipes to Learn More
        </PCenter>
        <ProductLayout1>
          <Recipe
            recipe={recipes[0]}
            image={data.Beef_Kebab__Soya.childImageSharp.fluid}
            slug={`Beef_Kebab__Soya`}
          />
          <Recipe
            recipe={recipes[1]}
            image={data.Whole_chicken_leg_with_thighs.childImageSharp.fluid}
            slug={`Whole_chicken_leg_with_thighs`}
          />
          <Recipe
            recipe={recipes[2]}
            image={data.chicken_wing.childImageSharp.fluid}
            slug={`chicken_wing`}
          />
          <Recipe
            recipe={recipes[3]}
            image={data.chicken_drumsticks.childImageSharp.fluid}
            slug={`chicken_drumsticks`}
          />
          <Recipe
            recipe={recipes[4]}
            image={data.Hard_Grilled_plantains.childImageSharp.fluid}
            slug={`Hard_Grilled_plantains`}
          />
          <Recipe
            recipe={recipes[5]}
            image={data.MaEnows_Riblets.childImageSharp.fluid}
            slug={`MaEnows_Riblets`}
          />
          <Recipe
            recipe={recipes[6]}
            image={data.Whole_Roasted_fish.childImageSharp.fluid}
            slug={`Whole_Roasted_fish`}
          />
          <Recipe
            recipe={recipes[7]}
            image={data.Whole_Roasted_fish_2.childImageSharp.fluid}
            slug={`Whole_Roasted_fish_2`}
          />
          <Recipe
            recipe={recipes[8]}
            image={data.Miyondo.childImageSharp.fluid}
            slug={`Miyondo`}
          />
          <Recipe
            recipe={recipes[9]}
            image={data.Accra_Bananas.childImageSharp.fluid}
            slug={`Accra_Bananas`}
          />
          <Recipe
            recipe={recipes[10]}
            image={data.plantains2.childImageSharp.fluid}
            slug={`plantains2`}
          />
          <Recipe
            recipe={recipes[11]}
            image={data.Whole_grilled_plantains.childImageSharp.fluid}
            slug={`Whole_grilled_plantains`}
          />
        </ProductLayout1>
      </Section>
    </Layout>
  );
};

export default Recipes;
