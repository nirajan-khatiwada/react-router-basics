import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Productdetail = () => {
const params=useParams();
  return (
    <>
      <Link to='product' relative='route'>Click me</Link>
      <div>Buy {params.pname} </div>
      </>
    )
}

export default Productdetail