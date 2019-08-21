// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'

// export default function RouteWrapper ({
//   component: Component,
//   isPrivate: false,
//   ...rest,
// }) {
//   const signed = false

//   if(!signed && isPrivate){
//     return <Redirect to="/" />
//   }

//   if(signed && !isPrivate){
//     return <Redirect to="/dashboard" />
//   }

//   return (
//     <Route
//       {...rest}
//       component={Component}
//     />
//   )

// }

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Route, Redirect } from 'react-router-dom';

// export default function RouteWrapper({
//   component: Component,
//   isPrivate,
//   ...rest
// }) {
//   const signed = true;

//   if (!signed && isPrivate) {
//     return <Redirect to="/" />;
//   }

//   if (signed && !isPrivate) {
//     return <Redirect to="/dashboard" />;
//   }

//   return <Route {...rest} component={Component} />;
// }

// RouteWrapper.propTypes = {
//   isPrivate: PropTypes.bool,
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//     .isRequired,
// };

// RouteWrapper.defaultProps = {
//   isPrivate: false,
// };

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Route, Redirect } from 'react-router-dom';

// import AuthLayout from '../pages/_layouts/auth';
// import DefaultLayout from '../pages/_layouts/default';

// export default function RouteWrapper({
//   component: Component,
//   isPrivate,
//   ...rest
// }) {
//   const signed = true;

//   if (!signed && isPrivate) {
//     return <Redirect to="/" />;
//   }

//   if (signed && !isPrivate) {
//     return <Redirect to="/dashboard" />;
//   }

//   const Layout = signed ? DefaultLayout : AuthLayout;

//   return (
//     // <Route
//     //   {...rest}
//     //   component={Component}
//     // />
//     <Route
//       {...rest}
//       render={props => (
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   );
// }

// RouteWrapper.propTypes = {
//   isPrivate: PropTypes.bool,
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//     .isRequired,
// };

// RouteWrapper.defaultProps = {
//   isPrivate: false,
// };

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Route, Redirect } from 'react-router-dom';

// import AuthLayout from '~/pages/_layouts/auth';
// import DefaultLayout from '~/pages/_layouts/default';

// export default function RouteWrapper({
//   component: Component,
//   isPrivate,
//   ...rest
// }) {
//   const signed = false;

//   if (!signed && isPrivate) {
//     return <Redirect to="/" />;
//   }

//   if (signed && !isPrivate) {
//     return <Redirect to="/dashboard" />;
//   }

//   const Layout = signed ? DefaultLayout : AuthLayout;

//   return (
//     // <Route
//     //   {...rest}
//     //   component={Component}
//     // />
//     <Route
//       {...rest}
//       render={props => (
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   );
// }

// RouteWrapper.propTypes = {
//   isPrivate: PropTypes.bool,
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//     .isRequired,
// };

// RouteWrapper.defaultProps = {
//   isPrivate: false,
// };

// S>----------------------------------------------------------------------------------------<//

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

// import store from '~/store';
import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const signed = false;

  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    // <Route
    //   {...rest}
    //   component={Component}
    // />
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
