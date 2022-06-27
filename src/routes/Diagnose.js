import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav';
import { ViewPatient } from '../ViewPatient';


export default function Diagnose() {

  return (
    <Fragment>
      <ViewPatient />
      <Outlet />
    </Fragment>
  )
}

