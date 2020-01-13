import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { HomeSection } from './Section/ContentfulSection';

const AboutUs = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "8a766777-f6b9-51df-a0de-4bd587aceb00" }
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

export default AboutUs;
