import React, { useRef, useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import api from '~/services/api';
import FileIput from './FileInput';
import { Container } from './styles';

import more from '~/assets/more.svg';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  dateFormatted: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function NewEdit({ match }) {
  const dispatch = useDispatch();
  const [meetup, setmeetup] = useState({});
  const [fileId, setfileId] = useState();
  // console.tron.log('props :', props);
  // console.tron.log('match :', match);

  useEffect(() => {
    async function loadMeetup() {
      if (match.params.id > 0) {
        const response = await api.get(`meetups/?id=${match.params.id}`);

        const data = response.data.map(meets => {
          return {
            ...meets,
            dateFormatted: format(parseISO(meets.date), "yyyy-MM-dd'T'HH':'mm"),
            url: meets.File.url,
          };
        });
        // console.log('response :', response);
        // console.log('data_detail: ', data[0]);
        // console.log('data_detail: ', data[0].dateISO);
        // console.log('data_detail: ', data[0].File.url);

        setmeetup(data[0]);
        setfileId(data[0].FileId);
      }
    }
    loadMeetup();
  }, [match.params.id]);

  function handleSubmit(data) {
    data.id = match.params.id;
    if (data.id > 0) {
      data.file_id = fileId;
      console.tron.log('handleSubmit_update_data: ', data);
      dispatch(updateMeetupRequest(data));
    } else {
      data.file_id = fileId;
      console.tron.log('handleSubmit_create_data: ', data);
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <Container>
      <FileIput image={meetup.url} fileId={fileId} setfileId={setfileId} />
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" />
        <Input
          name="dateFormatted"
          type="datetime-local"
          placeholder="Data do meetup"
          required
        />
        <Input name="location" placeholder="Localização" />

        <div>
          <button type="submit">
            <img src={more} alt="more" />
            <span>Salvar meetup</span>
          </button>
        </div>
      </Form>
    </Container>
  );
}
