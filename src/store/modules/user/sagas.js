// import { all, takeLatest } from 'redux-saga/effects';

// export function* updateProfile({ payload }) {}

// export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

// S>----------------------------------------------------------------------------------------<//

import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  // console.log('sagas_updateProfile_payload: ', payload);
  // alert(payload.data);
  try {
    const { name, email, ...rest } = payload.data;
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );
    const response = yield call(api.put, 'users', profile);
    toast.success('Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
