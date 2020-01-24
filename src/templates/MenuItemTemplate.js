import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Slider from 'react-slick';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Layout from '../components/layouts/Layout';
import {
  Bold,
  P,
  H1,
  Subtitle,
  H2Centered,
} from '../components/reusableStyles/typography/Typography';
import {
  StyledImage,
  ImageContainerSlider,
} from '../components/home/HomeStyling';
import SliderContainer2 from '../components/reusableStyles/slider/SliderContainer2';
import {
  Section,
  Container800,
  SectionHexaGrey,
  ContainerCenterFlex,
} from '../components/reusableStyles/sections/Sections';
import GetAllMenusHook from '../hooks/contentful/products/menu/getAllMenuItemsHook';
import MenuItemSmall from '../components/menuItemContentful/MenuItemSmall';
import { SnipCartButton1 } from '../components/reusableStyles/buttons/SnipCartAddToCartButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SUbDiv = styled.div`
  margin-bottom: 2rem;
`;

const Ul = styled.ul`
  display: inline-block;

  list-style: none;
`;

const Li = styled.li`
  display: inline-block;
  padding: 1rem 2rem;
  margin: 1rem;
  color: ${props => props.theme.colors.white};
  margin-right: 1rem;
  background: ${props => props.theme.colors.primary};
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

// run the template query
export const query = graphql`
  query menuTemplateQuery($slug: String!) {
    menu: allContentfulMenuItems(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        price
        title
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
const RTFUl = ({ children }) => <Ul>{children}</Ul>;
const RTFLi = ({ children }) => <Li>{children}</Li>;

const MenuItemTemplate = ({ data: { menu } }) => {
  const myMenuItems = GetAllMenusHook();
  const {
    title,
    slug,
    price,
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
      [BLOCKS.UL_LIST]: (node, children) => <RTFUl>{children}</RTFUl>,
      [BLOCKS.LIST_ITEM]: (node, children) => <RTFLi>{children}</RTFLi>,
    },
  };
  console.log('PICTURES', pictures[0].fluid.src);
  return (
    <Layout>
      <Section>
        <Container>
          <SUbDiv>
            <H1>{title}</H1>
            <Subtitle>{subtitle}</Subtitle>
          </SUbDiv>

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
          <Container800>
            {documentToReactComponents(json, options)}
          </Container800>

          <SnipCartButton1
            className={`snipcart-add-item`}
            data-item-id={slug}
            data-item-name={title}
            data-item-image={pictures[0].fluid.src}
            data-item-price={price}
            data-item-url={`/menu/${slug}`}
          >
            Add to Cart
          </SnipCartButton1>
        </Container>
      </Section>
      <SectionHexaGrey>
        <H2Centered>More Items</H2Centered>
        <ContainerCenterFlex>
          {myMenuItems.map((item, i) => (
            <MenuItemSmall key={i} item={item} />
          ))}
        </ContainerCenterFlex>
      </SectionHexaGrey>
    </Layout>
  );
};
export default MenuItemTemplate;
