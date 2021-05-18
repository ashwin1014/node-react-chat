/* eslint-disable react/prop-types */
import React, { memo } from 'react';
// import { Link } from 'react-router-dom';

import { closeIcon, onlineIcon } from '@icons';
import { Container, LeftContainer, RightContainer, Icon } from './InfoBar.style';

const InfoBar = ({ room }) => {
  return (
    <Container>
      <LeftContainer>
        <Icon src={onlineIcon} alt='online' />
        <h3>{room}</h3>
      </LeftContainer>
      <RightContainer>
        <a href='/'>
          <Icon src={closeIcon} alt='close chat' />
        </a>
      </RightContainer>
    </Container>
  );
};

export default memo(InfoBar);
