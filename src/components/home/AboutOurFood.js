import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { HomeSection } from './Section/ContentfulSection';

const AboutOurFood = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "f8e519e4-348a-53c5-8ac7-1a6c725421d0" }
      ) {
        id
        title
        columnReverse
        subtitle {
          subtitle
        }
        pictures {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        description {
          json
        }
      }
    }
  `);

  return <HomeSection data={contentfulData.contentfulSectionSimple} />;
};

export default AboutOurFood;
