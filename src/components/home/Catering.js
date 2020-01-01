import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import NoStyleLink from '../Links/NoStyleLink';

const Catering = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "food-invite.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <BlurbContainer>
        <CustomH2>CATERING</CustomH2>
        <CustomP>Let us Cater to your Next Event...</CustomP>
        <CustomPHome>
          Let us cater to your next Event. Be it a Small Wedding, Bachelor's
          Eve, Bridal Shower, Baby Showers, Gender Reveal, Birthday, Citizenship
          Ceremony, Romantic Dinner for two. We can also do private cookery in
          the comfort of your home. Make us part of your celebrations. Lets take
          the stress of planning for that special event and the fatigue that
          comes thereafter.
        </CustomPHome>
        <CustomPHome>
          So relax and, go on engaging in conversations with guest and most
          especially, be part of the Fun! Being a baby food service, with
          potential growth, we at this point are only able to cater for small
          gatherings of <Bold>20-30</Bold> persons max.
        </CustomPHome>

        <ButtonStyle2>
          <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn="soft" />
      </ImageContainer>
    </Container>
  );
};

export default Catering;
