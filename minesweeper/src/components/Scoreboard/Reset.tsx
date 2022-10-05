import React, { FC } from 'react';
import styled from '@emotion/styled';

export const Reset: FC = () => {
  return <button>{'😮' + '😊'}</button>;
};

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;
