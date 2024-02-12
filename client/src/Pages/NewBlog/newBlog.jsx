import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NewBlog.css'
const NewBlog = () => {
  return (
    <div className='form-head1'>
    <center className='login-head1'>Add Blogs</center><br/>
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="email" placeholder="Enter Blog Title" />
    </Form.Group><br/>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Blog content</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
    <Button className='Button' type="submit">
      Save
    </Button><br/><br/>

    </Form>
    </div>
  )
}

export default NewBlog