import React from 'react'
import './Button.css'

import Buttonm from '@mui/material/Button';

export default function Button(props) {
  return (
    <Buttonm variant="contained">
    {props.buttonText}
  </Buttonm>
  )
}
