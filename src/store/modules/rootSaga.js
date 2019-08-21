// import { all } from 'redux-saga/effects';

// import auth from './auth/sagas';

// export default function* rootSage() {
//   return yield all([auth]);
// }
// S>----------------------------------------------------------------------------------------<//

import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import meetup from './meetup/sagas';

export default function* rootSage() {
  return yield all([auth, user, meetup]);
}

// S>----------------------------------------------------------------------------------------<//

// import { all } from 'redux-saga/effects';

// import auth from './auth/sagas';
// import user from './user/sagas';
// import file from './file/sagas';

// export default function* rootSage() {
//   return yield all([auth, user, file]);
// }
