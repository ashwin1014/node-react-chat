/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';

import qs from 'query-string';
import io from 'socket.io-client';

import { Head, InfoBar, Input, Messages } from '@sharedComponents';
import strings from '@localization/Chat.locale';

import './Chat.style.scss';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  const socket = useRef();

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const { name, room } = qs.parse(location.search);

    setName(name);
    setRoom(room);

    socket.current = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

    // console.log(socket);
    socket.current.emit('join', { name, room }, (error) => {
      if (error) console.error(error);
    });

    return () => {
      socket.current.emit('disconnect');
      socket.current.off();
    };
  }, [location.search, ENDPOINT]);

  useEffect(() => {
    socket.current.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.current.on('roomData', ({ usr }) => {
      setUsers(usr);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.current.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(users);

  return (
    <>
      <Head>
        <title>{strings.Title}</title>
      </Head>
      <div className='joinOuterContainer'>
        <div className='container'>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default Chat;
