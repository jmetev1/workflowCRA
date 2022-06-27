import { BanCircleIcon, TickCircleIcon } from 'evergreen-ui';
import React, { Fragment, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
require('./question.css')

export default function Question({ question, html, yesRoute, noRoute }) {
  const size = 60;
  return (
    <>
      <div className="question">
        {html || question}
      </div>
      <div className="parent">
        <Link
          to={yesRoute || 'nomatch'}
          onClick={() => window.notes.push([question, 'yes'])}
          className="child"
        >
          <span className="icon" >
            <TickCircleIcon size={size} color="success" />
            <div className="reply">              Yes            </div>
          </span>
        </Link>
        <Link
          to={noRoute || '../nomatch'}
          className="child"
          onClick={window.notes.push([question, 'no'])}
        >
          <span className="icon"  >
            <BanCircleIcon size={size} color="danger" />
            <div className="reply" >              No            </div>
          </span>
        </Link>
      </div>
    </>
  )
}


