import React from 'react'

export const Card = ({ record }) => {
  return (
    <div>
      <h2>
        {record.title}
      </h2>
      <img src={record.img} />
      <h3>{record.price}</h3>
      <p><a target='_blank' href={record.release}> go to record</a></p>
    </div>
  )
}
