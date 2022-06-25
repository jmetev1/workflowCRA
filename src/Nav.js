import React, { Fragment, useState } from 'react';
import { url } from './url';

import {
  Button, Dialog, TextInputField,
  Pane,
  SelectField,
  Textarea,
  Spinner,
} from 'evergreen-ui';

import { NavLink } from 'react-router-dom';

export const Nav = ({ user }) => {
  const MyButton = (props) => (
    <Button style={{ flex: '1 1 33%' }} height="36" {...props} />
  );
  const style = { margin: 'auto' };

  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(routeNames)
        .map(([label, [url]]) => {
          return (
            <MyButton
              key={label}
              appearance={
                window.location.href.includes(url) ? 'primary' : 'default'
              }
            >
              <NavLink
                to={`/${url}`}
                style={{
                  width: '100%',
                  textDecoration: 'none',
                  color: 'unset',
                }}
              >
                <span style={style}>{label}</span>
              </NavLink>
            </MyButton>
          );
        })}
    </nav>
  );
};


export const routeNames = {
  // 'Past Visits': ['pastvisits'],
  // 'Add Clinic': ['addclinic'],
  // 'Add Provider': ['addprovider'],
  // 'Add Visit': ['addvisit'],
  // Settings: ['settings'],
  Home: [''],
  'Add Patient': ['addpatient'],
  'Diagnose': ['diagnose'],
};




// export default Home;
