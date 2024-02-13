import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NewBlog.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState(localStorage.getItem('name'));

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/newBlog/${localStorage.getItem('id')}`, {title, author, content})
            if(res.status === 201){
                navigate(`/blog/${res.data._id}`)
            }
        } catch (error) {
            console.error('Error:', error);
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
