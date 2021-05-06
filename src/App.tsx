import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core';
import './App.css';
import withTransition from 'components/withTransition';
import useStyles from 'styles/transition';

import ColoredLorem from 'components/ColoredLorem';




function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.links}>
        <Link to="/1">Page 1</Link>
        <Link to="/2">Page 2</Link>
        <Link to="/3">Page 3 (HOC - not working)</Link>
      </div>
      <Route path="/1">
        {({ match }) => {
          return <CSSTransition
            in={match !== null}
            timeout={1000}
            unmountOnExit
            classNames={{
              enter: classes.listTransitionEnter,
              enterActive: classes.listTransitionEnterActive,
              exit: classes.listTransitionExit,
              exitActive: classes.listTransitionExitActive
            }}
          >
            <div className={classes.page}>
              <ColoredLorem />
            </div>
          </CSSTransition>
        }}
      </Route>
      <Route path="/2">
        {({ match }) => {
          return <CSSTransition
            in={match !== null}
            timeout={1000}
            unmountOnExit
            classNames={{
              enter: classes.listTransitionEnter,
              enterActive: classes.listTransitionEnterActive,
              exit: classes.listTransitionExit,
              exitActive: classes.listTransitionExitActive
            }}
          >
            <div className={classes.page}>
              <ColoredLorem />
            </div>
          </CSSTransition>
        }}
      </Route>
      <Route path="/3" children={(props) => {
        const HOC = withTransition(ColoredLorem)
        return <HOC {...props}></HOC>
      }} />
      <Route path="/">
        <Redirect to="/1"></Redirect>
      </Route>
    </Router>
  );
}

export default App;
