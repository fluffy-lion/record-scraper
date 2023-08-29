import React from 'react'
import { Button } from './Button'


export const CardLg = ({ handler, record, buttonText }) => {

 
  return (
    <div>
      <h2>
        {record.title}
      </h2>
      <img src={record.img} />
      <h3>{record.price}</h3>
      <p><a target='_blank' rel='noreferrer' href={record.release}> go to record</a></p>
      <Button buttonText={buttonText} handler={handler}/>
    </div>
  )
}
