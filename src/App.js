import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from './Nav';


const App = ({ user }) => (
  <Fragment>
    <Nav />
    <Outlet />
  </Fragment>

)


export default App;
