// import React from 'react';
// import { Router } from 'react-router-dom';

// import './Config/ReactotronConfig';

// import Routes from './routes';
// import history from './services/history';

// function App() {
//   return (
//     <Router history={history}>
//       <Routes />
//     </Router>
//   );
// }

// export default App;

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import { Router } from 'react-router-dom';

// import './Config/ReactotronConfig';

// import Routes from './routes';
// import history from './services/history';

// import GlobalStyle from './styles/global';

// function App() {
//   return (
//     <Router history={history}>
//       <Routes />
//       <GlobalStyle />
//     </Router>
//   );
// }

// export default App;

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';

// import './Config/ReactotronConfig';

// import Routes from './routes';
// import history from './services/history';

// import store from './store';

// import GlobalStyle from './styles/global';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router history={history}>
//         <Routes />
//         <GlobalStyle />
//       </Router>
//     </Provider>
//   );
// }

// export default App;

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';

// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';

// import './Config/ReactotronConfig';

// import Routes from './routes';
// import history from './services/history';

// import { store, persistor } from './store';

// import GlobalStyle from './styles/global';

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <Router history={history}>
//           <Routes />
//           <GlobalStyle />
//         </Router>
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;

// S>----------------------------------------------------------------------------------------<//

import React from 'react';
import { ToastContainer } from 'react-toastify';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import { ToastContainer } from 'react-toastify'
// import { PersistGate } from 'redux-persist/integration/react'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'

// import './Config/ReactotronConfig'

// import Routes from './routes'
// import history from './services/history'

// import { store, persistor } from './store'

// import GlobalStyle from './styles/global'

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor} >
//         <Router history={history}>
//           <Routes />
//           <GlobalStyle />
//           <ToastContainer autoClose={3000} />
//         </Router>
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;
