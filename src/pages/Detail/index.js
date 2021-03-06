import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

import edit from '~/assets/edit.svg';
import cancel from '~/assets/cancel.svg';
import date from '~/assets/date.svg';
import location from '~/assets/location.svg';

import { Container, DivImg, DivInfo } from './styles';

export default function Detail({ match }) {
  const dispatch = useDispatch();
  const [meetup, setmeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups', {
        params: {
          id: match.params.id,
        },
      });
      // console.tron.log('response :', response);
      const data = response.data.map(meets => {
        return {
          ...meets,
          dateFormatted: format(
            parseISO(meets.date),
            "d 'de' MMMM', às' HH'h'",
            {
              locale: pt,
            }
          ),
          url: meets.File.url,
        };
      });
      // console.log('data_detail: ', data[0]);
      // console.log('data_detail: ', data[0].User.name);
      // console.log('data_detail: ', data[0].File.url);

      setmeetup(data[0]);
    }
    loadMeetup();
  }, [match.params.id]);

  function handleSubmit(data) {
    dispatch(deleteMeetupRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <Link to={`/newEdit/${meetup.id}`}>
            <button type="button">
              <img src={edit} alt="" />
              <span>Editar</span>
            </button>
          </Link>
          <button type="button" onClick={() => handleSubmit(meetup.id)}>
            <img src={cancel} alt="" />
            <span>Cancelar</span>
          </button>
        </div>
      </header>
      <DivImg image={meetup.url}>
        <img src={meetup.url} alt="meetup" />
      </DivImg>
      <span>{meetup.description}</span>
      <DivInfo>
        <div>
          <img src={date} alt="date" />
          <span>{meetup.dateFormatted}</span>
        </div>
        <div>
          <img src={location} alt="location" />
          <span>{meetup.location}</span>
        </div>
      </DivInfo>
    </Container>
  );
}
