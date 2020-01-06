import styled from '@emotion/styled';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { PBasic, H2 } from '../reusableStyles/typography/Typography';

const Container = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 4fr 5fr;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div``;

const ImageContainerSlider = styled.div`
  max-width: 50rem;
`;

const CustomBackgroundImage = styled(BackgroundImage)`
  max-width: 45rem;
  height: 30rem;
  margin: 0 auto;

  background-size: cover;
  background-position: center;

  opacity: 1 !important;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    margin-top: 2rem;
    width: 100%;
  }
`;

const BlurbContainer = styled.div``;

const StyledImage = styled(Image)`
  max-width: 45rem;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    margin-top: 2rem;
    width: 100%;
  }
`;

const CustomP = styled(PBasic)`
  font-family: Merienda;
  font-size: 2.2rem;
`;

const CustomPHome = styled(PBasic)`
  font-family: Montserrat;
  font-size: 1.7rem;
  line-height: 2.5rem;
`;

const CustomH2 = styled(H2)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-family: Tangerine;
`;

export {
  Container,
  ImageContainer,
  ImageContainerSlider,
  BlurbContainer,
  StyledImage,
  CustomP,
  CustomH2,
  CustomPHome,
  CustomBackgroundImage,
};
