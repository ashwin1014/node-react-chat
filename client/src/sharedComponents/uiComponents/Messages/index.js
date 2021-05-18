/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classNames';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const Container = styled(ScrollToBottom)`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;

const Messages = ({ className = '', messages, name }) => {
  return (
    <Container className={cx({ [`${className}`]: className })}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </Container>
  );
};

Messages.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.string,
  name: PropTypes.string
};

export default memo(Messages);
