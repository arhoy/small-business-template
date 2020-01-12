import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { HomeSection } from './Section/ContentfulSection';

const AboutOurFood = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "1ded9205-f7c7-5f14-9c03-05766aa6e2b2" }
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
