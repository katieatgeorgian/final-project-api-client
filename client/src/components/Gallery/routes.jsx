import React, {useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from "./index";
import New from "./New";
import Edit from "./Edit";
import Show from "./Show";

const Routes = () => {
  const { user } = useContext(UserContext);
  return (
    <Switch>

    {user && user.token ? (
        <>
          <Route exact path="/gallery/new" component={New}/>
          <Route exact path="/gallery" component={Index}/>
          <Route exact path="/gallery/:id" component={Show}/>
          <Route exact path="/gallery/edit/:id" component={Edit}/>
        </>
      ) : 
        <>
          <Route exact path="/gallery" component={Index}/>
          <Route exact path="/gallery/:id" component={Show}/>
        </>
      }      
    </Switch>
  );
}
 
export default Routes;