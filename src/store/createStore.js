// import { createStore } from 'redux';

// export default (reducers, middlewares) => {
//   return createStore(reducers, middlewares);
// };

// S>----------------------------------------------------------------------------------------<//

import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
