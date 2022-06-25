import React, { Fragment, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Rsv() {

  return (
    <div>
      Does patient have risk factors for complications from
      respiratory syncytial virus (RSV) infections, such as:
      <ul>
        {[
          'History of stem cell transplant or solid organ transplant',
          'Hematologic malignancy (leukemia or lymphoma)',
          'receiving chemotherapy',
          'All infants < 6 months old',
          'Premature infants',
          'Children < 2	 years old with chronic lung disease of',
          'prematurity or chronic heart disease',
          'Children with neuromuscular disorders'
        ].map(item => <li key={item}>{item}</li>)}
      </ul>
      <NavLink
        to={() => {
          window.notes.push('patient has risk factors for complications from respiratory syncytial virus (RSV) infections')
          return '../scofr'
        }}
        style={{
          width: '100%',
          textDecoration: 'none',
          color: 'unset',
        }}
      >
        Yes
      </NavLink>
    </div>
  )
}

