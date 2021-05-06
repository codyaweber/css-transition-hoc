import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { RouteChildrenProps } from 'react-router';

import useStyles from 'styles/transition';

// This <P,> syntax is a hack for Typescript generic anonymous functions...
// https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
const withTransition = (Component: React.ComponentType) : React.ComponentType<RouteChildrenProps> => {
  function HOC(props: RouteChildrenProps) {
    const classes = useStyles();
    const {match} = props;
    
    return (
      <CSSTransition
        in={match !== null}
        timeout={600}
        unmountOnExit
        classNames={{
          enter: classes.listTransitionEnter,
          enterActive: classes.listTransitionEnterActive,
          exit: classes.listTransitionExit,
          exitActive: classes.listTransitionExitActive
        }}
      >
        <div className={classes.page}>
          <Component/>
        </div>
      </CSSTransition>
    );
  }

  return HOC;
}

export default withTransition;