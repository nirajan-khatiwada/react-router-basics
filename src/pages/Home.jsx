import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const NavigateHandeler=()=>{

    navigate("/product")
  }

  return (
    <>
    <div>Home</div>
    <p>GO to <Link to='product'>List of product</Link></p>
    <button onClick={NavigateHandeler}>Click me</button>
    </>
  )
}

export default Home