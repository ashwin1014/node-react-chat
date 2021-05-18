/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classNames';
import ReactEmoji from 'react-emoji';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`;

const SentText = styled.p`
  display: flex;
  align-items: center;
  color: #828282;
  letter-spacing: 0.3px;
  ${(props) => props.padDir === 'right' && 'padding-right: 10px'};
  ${(props) => props.padDir === 'left' && 'padding-left: 10px'};
`;

const MessageBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
  background: ${(props) => props.background};
`;

const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: ${(props) => props.color};
  img {
    vertical-align: middle;
  }
`;

const Message = ({ className = '', message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <Container className={cx('justify-flex-end', { [`${className}`]: className })}>
      <SentText padDir='right'>{trimmedName}</SentText>
      <MessageBox background='#2979FF'>
        <MessageText color='#FFF'>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
    </Container>
  ) : (
    <Container className={cx('justify-flex-start', { [`${className}`]: className })}>
      <MessageBox background='#F3F3F3'>
        <MessageText color='#353535'>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
      <SentText padDir='left'>{user}</SentText>
    </Container>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  message: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string
  }),
  name: PropTypes.string
};

export default memo(Message);
