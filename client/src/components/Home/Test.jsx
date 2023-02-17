import React from 'react'
import { Fragment } from 'react'

export const Test = ({name, username, email, address, phone}) => {
  return (
    <Fragment>
        <h3>Nombre: {name}</h3>
        <h4>User name: {username}</h4>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
    </Fragment>
  )
}
