import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logom from '~/assets/logom.svg';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header(props) {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logom} alt="MeetApp" />
          {!props.linkDashboard && <Link to="/dashboard">DASHBOARD</Link>}
          {/* <Link to="/dashboard">DASHBOARD</Link> */}
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

// S>----------------------------------------------------------------------------------------<//

// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// import Notifications from '~/components/Notifications'

// import logo from '~/assets/logo-purple.svg'

// import { Container, Content, Profile } from './styles'

// export default function Header () {
//   const {name, avatar} = useSelector(state => state.user.profile)
//   const preview = avatar ? avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'
//   return (
//     <Container>
//       <Content>
//         <nav>
//           <img src={logo} alt="GoBarber"/>
//           <Link to="/dashboard">DASHBOARD</Link>
//         </nav>

//         <aside>
//           <Notifications />
//           <Profile>
//             <div>
//               <strong>{name}</strong>
//               <Link to="/profile">Meu perfil</Link>
//             </div>
//             <img src={ preview } alt={name} />
//           </Profile>
//         </aside>
//       </Content>
//     </Container>
//   )
// }
