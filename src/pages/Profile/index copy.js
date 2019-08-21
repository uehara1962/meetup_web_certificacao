import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // useEffect(() => {
  //   console.log('Profile_useEffect');
  //   if (name !== profile.name) {
  //     setName(profile.name);
  //     console.log('Profile_useEffect_name_updated');
  //   }
  //   if (email !== profile.email) {
  //     setEmail(profile.email);
  //     console.log('Profile_useEffect_name_updated');
  //   }
  // }, [profile]);

  function handleSubmit() {
    const data = {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    };
    // console.log('data: ', data);
    // alert(data.email);
    console.tron.log('handleSubmit: ', data);

    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          placeholder="Nome completo"
          onChange={e => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Seu endereço de email"
          onChange={e => setEmail(e.target.value)}
        />
        <hr />
        <input
          name="oldPassword"
          type="password"
          value={oldPassword}
          placeholder="Sua senha atual"
          onChange={e => setOldPassword(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Nova senha"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          placeholder="Confirmação de senha"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Atualizar perfil</button>
      </form>
    </Container>
  );
}
