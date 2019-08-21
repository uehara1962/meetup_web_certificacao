import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import more from '~/assets/more.svg';

import { Container, Header } from './styles';

export default function Dashboard({ match }) {
  const [meetups, setmeetups] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups');
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
        };
      });
      // console.log('data: ', data);

      setmeetups(data);
    }
    loadMeetup();
  }, []);

  return (
    <Container>
      <Header dashboardEnable={match.path === '/dashboard'}>
        <strong>Meus meetups</strong>
        <Link to="/newEdit/0">
          <button type="button" onClick={() => {}}>
            <img src={more} alt="" />
            <span>Novo meetup</span>
          </button>
        </Link>
      </Header>

      <ul>
        {meetups.map(meet => (
          <li key={meet.id}>
            <strong>{meet.title}</strong>
            <div>
              <span>{meet.dateFormatted}</span>
              <Link to={`/detail/${meet.id}`}>></Link>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
