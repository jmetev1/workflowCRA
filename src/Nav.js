import React from 'react';
import { Button } from 'evergreen-ui';

import { NavLink } from 'react-router-dom';

export const Nav = ({ user }) => {
  const MyButton = (props) => <Button style={{ flex: '1 1 33%' }} height="36" {...props} />

  const style = { margin: 'auto' };

  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(routeNames).map(([label, [url]]) => (
        <NavLink
          key={label}
          to={`/${url}`}
          style={{ flex: '1 1 33%', height: '36px' }}
        >{({ isActive }) => (
          <MyButton
            key={label}
            appearance={isActive ? 'primary' : 'default'}
            style={{ width: '100%' }}
          >
            <span style={style}>{label}</span>
          </MyButton>
        )}</NavLink>)
      )}
    </nav >
  );
};

export const routeNames = {
  Home: ['home'],
  'Add Patient': ['addpatient'],
  'Diagnose': ['diagnose'],
  Notes: ['notes'],
};
