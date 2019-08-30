import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';

import history from '~/services/history';
import api from '~/services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  deleteMeetupSuccess,
  deleteMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  // console.log('sagas_createMeetup_payload: ', payload);
  // alert(payload.data);
  try {
    const {
      title,
      file_id,
      description,
      location,
      dateFormatted,
    } = payload.data;

    const date = parseISO(dateFormatted);
    const meetup = { title, file_id, description, location, date };

    console.tron.log('createMeetupSuccess_meetup :', meetup);
    const response = yield call(api.post, 'meetups/', meetup);
    toast.success('Meetup creado com sucesso!');
    yield put(createMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao criar meetup, confira seus dados!');
    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  // console.log('sagas_updateMeetup_payload: ', payload);
  // alert(payload.data);
  try {
    const {
      id,
      title,
      file_id,
      description,
      location,
      dateFormatted,
    } = payload.data;
    const date = parseISO(dateFormatted);
    const meetup = { title, file_id, description, location, date };
    console.tron.log('updateMeetup_meetup :', meetup);
    console.tron.log('updateMeetup_id :', id);
    const response = yield call(api.put, 'meetups/', meetup, {
      params: {
        id,
      },
    });
    // const response = yield call(api.put, 'meetup', meetup);
    toast.success('Meetup atualizado com sucesso!');
    yield put(updateMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira seus dados!');
    yield put(updateMeetupFailure());
  }
}

export function* deleteMeetup({ payload }) {
  // console.log('sagas_updateMeetup_payload: ', payload);
  // alert(payload.data);
  try {
    const response = yield call(api.delete, `meetups/${payload.data}`);
    // const response = yield call(api.put, 'meetup', meetup);
    toast.success('Meetup deletado com sucesso!');
    // yield put(deleteMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao deletar meetup, confira seus dados!');
    yield put(deleteMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
