import { makeStyles } from '@material-ui/core';

const pageEnter = {
  opacity: 0,
  transform: 'scale(0.9) translateX(100px)',
};

const pageEnterActive = {
  opacity: 1,
  transform: 'scale(1) translateX(0)',
  transition: 'opacity 300ms, transform 300ms'
}

const pageExit = {
  opacity: 1,
  transform: 'scale(1) translateX(0)'
}

const pageExitActive = {
  opacity: 0,
  transform: 'scale(0.9) translateX(-100px)',
  transition: 'opacity 300ms, transform 300ms'
}

export default makeStyles(() => ({
  root: {
    width: '100%',
  },
  links: {
    width: '25%',
    margin: 'auto',
    padding: 24,
    display: 'flex',
    justifyContent: 'space-around'
    
  },
  listTransitionEnter: {
    ...pageEnter,
  },
  listTransitionEnterActive: {
    ...pageEnterActive,
  },
  listTransitionExit: {
    ...pageExit,
  },
  listTransitionExitActive: {
    ...pageExitActive,
  },
  page: {
    position: 'absolute',
    width: '80%',
    padding: 100,
    maxHeight: 460,
    overflow: 'hidden',
    overflowY: 'auto',
    margin: 'auto'
  }
})
);