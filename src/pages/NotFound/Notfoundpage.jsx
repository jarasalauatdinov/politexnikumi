import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const Notfoundpage = () => {
  return (
    <div className='NotFound'>
        <h1>Something went wrong</h1>
        <Link to={"/"}>
        <Button bg="red">Go back Home</Button>
        </Link>
    </div>
  )
}

export default Notfoundpage