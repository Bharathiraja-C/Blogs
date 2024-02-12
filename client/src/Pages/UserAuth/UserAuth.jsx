import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UserAuth.css'

const UserAuth = () => {
    const [isSignup,setIsSignUp]=useState(true)
  return (
    <div className='form-head'>
{  isSignup ? (
    <>
    <b className='login-head'><span><i class="fa-solid fa-user"> </i></span>Login</b><br/>
    <p> Don't have an account? <a style={{color:"blue",cursor:"pointer"}} onClick={()=>setIsSignUp(false)}>Sign up</a></p>
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email Id</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group><br/>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group><br/>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group><br/>
    <Button className='Button' type="submit">
      Log In
    </Button><br/><br/>

    </Form></>):
     (
        <>
    <b className='login-head'><span><i class="fa-solid fa-user"> </i></span>Sign Up</b>
    <p> Already have an account? <a style={{color:"blue",cursor:"pointer"}} onClick={()=>setIsSignUp(true)}>Log In</a></p>
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter email" />
    </Form.Group><br/>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email Id</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group><br/>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group><br/>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group><br/>
    <Button className='Button'  type="submit">
      Sign Up
    </Button>

    </Form></>
     )
}
  </div>
  )
}

export default UserAuth