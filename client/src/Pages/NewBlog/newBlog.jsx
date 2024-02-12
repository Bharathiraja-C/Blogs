import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NewBlog.css';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/newBlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content })
            });
            const data = await response.json();
            console.log(data); // Optional: Handle response data
            // Redirect or show success message
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <div className='form-head1'>
            <center className='login-head1'>Add Blogs</center><br />
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group><br />

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Blog content</Form.Label>
                    <Form.Control as="textarea" rows={6} value={content} onChange={(e) => setContent(e.target.value)} />
                </Form.Group>
                <Button className='Button' type="submit">Save</Button><br /><br />
            </Form>
        </div>
    );
};

export default NewBlog;
