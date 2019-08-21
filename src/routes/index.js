// import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';
// import Detail from '../pages/Detail';
// import NewEdit from '../pages/NewEdit';

// export default function Routes() {
//   return (
//     <Switch>
//       <Route path="/" exact component={SignIn} />
//       <Route path="/register" component={SignUp} />
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/profile" component={Profile} />
//       <Route path="/Detail" component={Detail} />
//       <Route path="/newEdit" component={NewEdit} />
//     </Switch>
//   );
// }

// S>----------------------------------------------------------------------------------------<//

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';
import NewEdit from '../pages/NewEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/Detail/:id" component={Detail} isPrivate />
      <Route path="/newEdit/:id" component={NewEdit} isPrivate />
    </Switch>
  );
}
