// import { combineReducers } from 'redux';

// import auth from './auth/reducer';

// export default combineReducers({
//   auth,
// });
// S>----------------------------------------------------------------------------------------<//

import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import meetup from './meetup/reducer';

export default combineReducers({
  auth,
  user,
  meetup,
});

// S>----------------------------------------------------------------------------------------<//

// import { combineReducers } from 'redux';

// import auth from './auth/reducer';
// import user from './user/reducer';
// import file from './file/reducer';

// export default combineReducers({
//   auth,
//   user,
//   file,
// });
