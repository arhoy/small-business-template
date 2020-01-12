import React from 'react';

import Layout from '../components/layouts/Layout';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';

import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import NoStyleLink from '../components/Links/NoStyleLink';
import PrivacyPolicy from '../components/home/PrivacyPolicy';

const DeliveryPage = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <PrivacyPolicy />

          <ButtonStyle2>
            <NoStyleLink to="/">Back to Home Page</NoStyleLink>
          </ButtonStyle2>
        </Container800>
      </Section>
    </Layout>
  );
};

export default DeliveryPage;
