import React from 'react'

export const Button = ({ buttonText, handler }) => {
  return (
    <div>
        <button onClick={handler}>{buttonText}</button>
    </div>
  )
}
