import React from 'react'
import { SubmitButton } from '../components/SubmitButton/SubmitButton';
import { Context } from '../Context';

export const User = () => {
  //@ts-ignore
  const {removeAuth} = React.useContext(Context)
    return (
        <>
          <h1>USER</h1>
          <SubmitButton onClick={removeAuth}>
            Cerrar Sesion
          </SubmitButton>
        </>
      );
  };
  