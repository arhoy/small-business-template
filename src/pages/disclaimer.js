import React from 'react';

import Layout from '../components/layouts/Layout';

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
            <CustomH2>Fine Lines and/ or Disclaimer</CustomH2>
            <CustomP>Our Disclaimer...</CustomP>
            <CustomPHome>
              Our food contains a handful of different nuts and other herbs that
              may be foreign to you. Please be adviced,do not consume if you are
              prone to allergies of any form. Contact.
              <br /> <br />
              However, we are GLUTEN FREE. Again reach out to us!
              <br /> <br />
              And if you are more tolerant health wise and are a FOODIE, We ask
              that you are a lot patient with your First TRY. Come Again.
              Remember, TASTE IS CULTIVATED!
            </CustomPHome>

            <ButtonStyle2>
              <NoStyleLink to="/">Back to Home Page</NoStyleLink>
            </ButtonStyle2>
          </BlurbContainer>
        </Container800>
      </Section>
    </Layout>
  );
};

export default DeliveryPage;
