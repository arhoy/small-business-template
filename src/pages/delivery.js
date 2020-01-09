import React from 'react';

import Layout from '../components/layouts/Layout';

import { Bold } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';

import {
  BlurbContainer,
  CustomH2,
  CustomP,
  CustomPHome,
} from '../components/home/HomeStyling';
import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import NoStyleLink from '../components/Links/NoStyleLink';

const DeliveryPage = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <BlurbContainer>
            <CustomH2>Delivery And Packaging</CustomH2>
            <CustomP>Our Food...</CustomP>
            <CustomPHome>
              Our food comes in a zip lock foil bag, BPA approved silver back
              clear front...lick proof, smell proof and it's reusable. Free
              delivery on all catering orders within Edmonton. Free delivery to
              North Locations on orders $50 and over. Deliveries on other parts
              of Edmonton...$10
            </CustomPHome>
            <CustomPHome>
              We season the heck outta our food...here is your {` `}
              <Bold>FOOD INVITE! LET'S GO!</Bold>
            </CustomPHome>
            <CustomPHome>
              My love for cooking comes from first being a picky eater and
              wanting to create food that suits my taste bud. To secondly, just
              loving the traditional gender roles. I love to cater to loved ones
              around me...it is exuberant! And if you are reading this,
              <Bold> WELCOME TO THE FOOD INVITE FAMILY!</Bold>
            </CustomPHome>
            <ButtonStyle2>
              <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
            </ButtonStyle2>
          </BlurbContainer>
        </Container800>
      </Section>
    </Layout>
  );
};

export default DeliveryPage;
