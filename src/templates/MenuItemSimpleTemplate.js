import React from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Layout from '../components/layouts/Layout';
import { Bold, P } from '../components/reusableStyles/typography/Typography';
import {
  StyledImage,
  ImageContainerSlider,
} from '../components/home/HomeStyling';
import SliderContainer2 from '../components/reusableStyles/slider/SliderContainer2';

// run the template query
export const query = graphql`
  query menuSimpleTemplateQuery($slug: String!) {
    menu: allContentfulMenuItems(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title
        price
        subtitle {
          subtitle
        }
        description {
          json
        }
        pictures {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const RTFBold = ({ children }) => <Bold>{children}</Bold>;
const Text = ({ children }) => <P>{children}</P>;

const MenuItemTemplate = ({ data: { menu } }) => {
  const {
    title,

    subtitle: { subtitle },
    description: { json },
    pictures,
  } = menu.nodes[0];

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <Layout>
      <div>{title}</div>
      <div>{subtitle}</div>
      <ImageContainerSlider>
        {pictures.length > 1 ? (
          <Slider {...settings}>
            {pictures.map((image, i) => (
              <SliderContainer2 key={i}>
                <StyledImage fluid={image.fluid} />
              </SliderContainer2>
            ))}
          </Slider>
        ) : (
          <StyledImage fluid={pictures[0].fluid} />
        )}
      </ImageContainerSlider>
      <main>{documentToReactComponents(json, options)}</main>
    </Layout>
  );
};
export default MenuItemTemplate;
