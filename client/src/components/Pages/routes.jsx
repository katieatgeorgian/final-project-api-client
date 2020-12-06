import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>

      <Switch>
        <Route exact path="/gallery" component={Gallery}/>
      </Switch>

      <Switch>
        <Route exact path="/about" component={About}/>
      </Switch>

      <Switch>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </>
  );
}
 
export default Routes;