import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { HomeSection } from './Section/ContentfulSection';

const AboutOurFood = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "eb1bc4ea-7880-5d4d-8196-74b189170199" }
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
