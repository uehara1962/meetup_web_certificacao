// import React from 'react';
// import PropTypes from 'prop-types';

// import { Wrapper } from './styles';

// export default function Default({ children }) {
//   return <Wrapper>{children}</Wrapper>;
// }

// Default.propTypes = {
//   children: PropTypes.element.isRequired,
// };

// S>----------------------------------------------------------------------------------------<//

import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function Default({ children }) {
  // console.tron.log('children.props :', children.props);
  // console.tron.log('children.props.match :', children.props.match);
  return (
    <Wrapper>
      <Header
        linkDashboard={
          children.props.match.url === '/dashboard' ||
          // children.props.match.url === '/profile' ||
          children.props.match.url.substring(0, 7) === '/detail'
        }
      />
      {children}
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
