import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disabled, onClick }: any) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}