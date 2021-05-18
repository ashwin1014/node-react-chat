import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Head } from '@sharedComponents';
// import strings from '@localization/home.locale';

import './Home.style.scss';

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <>
      <Head>
        <title>Join Room</title>
      </Head>
      <div className='joinOuterContainer '>
        <div className='joinInnerContainer'>
          <h1 className='heading'>Join</h1>
          <div>
            <input placeholder='Name' value={name} className='joinInput' type='text' onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <input placeholder='Room' value={room} className='joinInput mt-20' type='text' onChange={(e) => setRoom(e.target.value)} />
          </div>
          <Link to={`/chat?name=${name}&room=${room}`} onClick={(event) => (!name || !room ? event.preventDefault() : null)}>
            <button className='button mt-20' type='submit'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
