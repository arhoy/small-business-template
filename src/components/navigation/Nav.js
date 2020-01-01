import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus-mobile/Main/MobileMenu1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

import NoStyleLink from '../Links/NoStyleLink';

const Header = styled.header`
  height: 80px;
  position: relative;

  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const Logo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: 2.9rem;
  padding: 0;
  margin: 0;

  text-decoration: none !important;
`;

const LogoSpan2 = styled.div`
  color: ${props => props.theme.colors.white};
  letter-spacing: 4px;
  display: flex;

  border-bottom: 2px solid ${props => props.theme.colors.primary};
  & span {
    display: inline-block;
    height: 40px;
    font-style: italic;
    border-bottom: thick double ${props => props.theme.colors.primaryLight};
  }
`;

const LogoSpan1 = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
`;

const NavContainer = styled.nav`
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  font-size: 1.6rem;
  display: flex;
`;

const CustomLink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.white};
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  & :hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const LogoImage = styled.img`
  width: 66px;
  position: absolute;
  top: 10px;
  right: -35px;
  z-index: -1;
`;

const NavSuperStore1 = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "CSF.png" }) {
        sharp: childImageSharp {
          fixed(width: 100) {
            src
          }
        }
      }
    }
  `);

  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <LogoSpan2>Cameroon</LogoSpan2>

            <LogoImage src={image.sharp.fixed.src} />

            <LogoSpan1>Food Invite</LogoSpan1>
          </LogoLink>
        </Logo>

        <NavContainer>
          <CustomLink to="/">Home </CustomLink>
          <CustomLink to="/recipes">Recipes </CustomLink>

          {/* <MyMenu3 color={'white'} title={`Recipes`}>
            <Container1200>
              <MegaMenu2 background={'white'}>
                <MainList2 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3> */}

          <CustomButtonStyle2>
            <a href="tel:587-920-9921">587-920-9921</a>
          </CustomButtonStyle2>
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
    </>
  );
};

export default NavSuperStore1;
