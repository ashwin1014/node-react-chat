/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import qs from 'query-string';
import io from 'socket.io-client';

import { Head } from '@sharedComponents';
import strings from '@localization/Chat.locale';

import './Chat.style.scss';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const { name, room } = qs.parse(location.search);

    const socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

    setName(name);
    setRoom(room);

    // console.log(socket);
    socket.emit('join', { name, room }, ({ error }) => {
      console.error(error);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search, ENDPOINT]);

  return (
    <>
      <Head>
        <title>{strings.Title}</title>
      </Head>
      <div className='joinOuterContainer'>
        <h1>{strings.Title}</h1>
      </div>
    </>
  );
};

export default Chat;
