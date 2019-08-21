// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';

// import logo from '~/assets/logo.svg';

// const schema = Yup.object().shape({
//   name: Yup.string().required('O nome é obrigatório'),
//   email: Yup.string()
//     .email('Insira um e-mail válido')
//     .required('O e-mail é obrigatório'),
//   password: Yup.string()
//     .min(6, 'No mínimo 6 caracteres')
//     .required('A senha é obrigatória'),
// });

// export default function SignUp() {
//   function handleSubmit(data) {
//     console.tron.log(data);
//   }

//   return (
//     <>
//       <img src={logo} alt="MeetApp" />

//       <Form schema={schema} onSubmit={handleSubmit}>
//         <Input name="name" placeholder="Nome completo" />
//         <Input name="email" type="email" placeholder="Seu e-mail" />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Sua senha secreta"
//         />
//         <button type="submit">Acessar</button>
//         <Link to="/">Já tenho login</Link>
//       </Form>
//     </>
//   );
// }

// S>----------------------------------------------------------------------------------------<//

import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logom from '~/assets/logom.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    // console.tron.log(data)
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logom} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
