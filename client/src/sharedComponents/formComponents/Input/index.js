import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

const Input = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
  cursor: pointer;
`;

const InputForm = ({ message = '', setMessage, sendMessage }) => {
  return (
    <Form>
      <Input
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />
      <Button onClick={(e) => sendMessage(e)}>Send Message</Button>
    </Form>
  );
};

InputForm.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func
};

export default memo(InputForm);
