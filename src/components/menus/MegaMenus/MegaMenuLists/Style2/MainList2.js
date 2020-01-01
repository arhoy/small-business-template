// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';

import { MegaMenuUl, MegaMenuLi, MegaMenuLink } from './ListStyles';

import ListHeader from './ListHeader';

const MainList2 = () => {
  return (
    <>
      <MegaMenuUl>
        <ListHeader title="All Recipes" />

        <MegaMenuLi>
          <MegaMenuLink to="/recipes">All Recipes</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>Sides</MegaMenuLi>
        <MegaMenuLi>Chicken</MegaMenuLi>
        <MegaMenuLi>Fish</MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Choice Recipes" />
        <MegaMenuLi>Beef Soya Kebab</MegaMenuLi>
        <MegaMenuLi>Chicken Drum Sticks</MegaMenuLi>
        <MegaMenuLi>Grilled Whole Platains</MegaMenuLi>
        <MegaMenuLi>Accra Banana</MegaMenuLi>
        <MegaMenuLi>Miyondo</MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Catering" />
        <MegaMenuLi>We Cater</MegaMenuLi>
        <MegaMenuLi>Contact Us</MegaMenuLi>
        <MegaMenuLi>Grilled Whole Platains</MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default MainList2;
