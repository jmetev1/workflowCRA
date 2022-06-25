import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav';

// const questions = {
//   fluLike: {
//     question: 'Patient with flu-like illness within past 48 hours?',
//     yes:
//     }
// }
// ]

export default function Question({ question, yes, no }) {

  return (
    <Fragment>
      <b>question</b>
      {/* <NavLink
        to={`/${url}`}
        style={{
          width: '100%',
          textDecoration: 'none',
          color: 'unset',
        }}
      >
        <span style={style}>{label}</span>
      </NavLink> */}
    </Fragment>
  )
}

