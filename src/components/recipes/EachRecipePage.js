import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { H1, PBasic } from '../reusableStyles/typography/Typography';

const Container = styled.div``;

const CustomImage = styled(Image)`
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const SubContainer = styled.div`
  margin: 1rem 0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(H1)`
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Description = styled(PBasic)`
  font-size: 1.8rem;
  font-family: Montserrat;
  &:before {
    content: '"';
  }
  &:after {
    content: '"';
  }
`;

const Price = styled.div`
  font-size: 3rem;
`;

const Calories = styled.div``;

export {
  Container,
  CustomImage,
  Title,
  Description,
  Price,
  SubContainer,
  Calories,
};
