// import React from 'react';
// import { Link } from 'react-router-dom';

// import logo from '~/assets/logo.svg';

// export default function SignIn() {
//   return (
//     <>
//       <img src={logo} alt="GoBarber" />

//       <form>
//         <input name="email" type="email" placeholder="Seu e-mail" />
//         <input
//           name="password"
//           type="password"
//           placeholder="Sua senha secreta"
//         />
//         <button type="submit">Acessar</button>
//         <Link to="/register">Criar conta gratuita</Link>
//       </form>
//     </>
//   );
// }

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Input } from '@rocketseat/unform';

// import logo from '~/assets/logo.svg';

// export default function SignIn() {
//   function handleSubmit(data) {
//     console.tron.log(data);
//   }

//   return (
//     <>
//       <img src={logo} alt="MeetApp" />

//       <Form onSubmit={handleSubmit}>
//         <Input name="email" type="email" placeholder="Seu e-mail" />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Sua senha secreta"
//         />
//         <button type="submit">Acessar</button>
//         <Link to="/register">Criar conta gratuita</Link>
//       </Form>
//     </>
//   );
// }

// S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';

// import logo from '~/assets/logo.svg';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Insira um e-mail válido')
//     .required('O e-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória'),
// });

// export default function SignIn() {
//   function handleSubmit(data) {
//     console.tron.log(data);
//   }

//   return (
//     <>
//       <img src={logo} alt="MeetApp" />

//       <Form schema={schema} onSubmit={handleSubmit}>
//         <Input name="email" type="email" placeholder="Seu e-mail" />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Sua senha secreta"
//         />
//         <button type="submit">Acessar</button>
//         <Link to="/register">Criar conta gratuita</Link>
//       </Form>
//     </>
//   );
// }

// S>----------------------------------------------------------------------------------------<//

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logom from '~/assets/logom.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logom} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">{loading ? 'Carregando..' : 'Entrar'}</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
