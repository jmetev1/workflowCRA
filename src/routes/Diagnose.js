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

export default function Diagnose() {

  return (
    <Fragment>
      {/* {window.patients.map(patient => (<Fragment key={patient.firstName}>
        {patient.firstName}
      </Fragment>))} */}
      <Outlet />
    </Fragment>
  )
}

