import React, { Fragment, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav } from '../Nav';


export default function Start() {
  return (
    <Fragment>
      <b>Patient with flu-like illness within past 48 hours?</b>
      <div>

        <NavLink
          to={'rsv'}
          style={{
            width: '100%',
            textDecoration: 'none',
            color: 'unset',
          }}
        >
          Yes
        </NavLink>
      </div>
    </Fragment>
  )
}