import React from 'react';
import styled from '@emotion/styled';

import Image from 'gatsby-image';
import NoStyleLink from '../Links/NoStyleLink';

const Title = styled(NoStyleLink)`
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  position: absolute;
  color: ${props => props.theme.colors.white};
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    text-decoration: underline;
  }
`;

const CustomImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
`;

const Container = styled.div`
  margin: 1rem;

  position: relative;
  cursor: pointer;
  &:hover {
    ${CustomImage} {
      filter: brightness(50%);
      -webkit-filter: brightness(50%);
      -webkit-transition: all 1s ease;
    }

    ${Title} {
      opacity: 1;
    }
  }
`;

const MenuItemSmall = ({ item }) => {
  return (
    <Container>
      <Title to={`menu/${item && item.slug}`}>
        {(item && item.title) || ''}
      </Title>
      <CustomImage fluid={item.pictures[0].fluid} />
    </Container>
  );
};
export default MenuItemSmall;
