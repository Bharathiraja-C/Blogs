import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const UserProfile = () => {

    const [isEditing, setIsEditing] = useState(false)
    const { id } = useParams();

    const [userData, setUserData] = useState({})
    const [blogData, setBlogData] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/getUserData/${id}`)
                if (res.status === 200) {
                    setUserData(res.data)
                    setBlogData(res.data.blogs)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getUserData()
    }, [])


    const saveProfileData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:5000/editUserData/${id}`, userData)
            if (res.status === 200) {
                setUserData(res.data.user)
            }
        } catch (error) {
            console.log(error)
        }
        setIsEditing(false)
    }

    const handleChange = (e, colName) => {
        setUserData(prevUserData => ({
            ...prevUserData,
            [colName]: e.target.value
        }));
    }

    const gotoBlog = () => {
        navigate('/blog/123')
    }

    return (
        <>
            <Navbar />
            <div className='profile-main'>
                <div className="profile-head">
                    <h3>Profile</h3>
                    {
                        isEditing ? null : (
                            id === localStorage.getItem('id') ?
                                (<button onClick={() => setIsEditing(true)}>Edit</button>) : null
                        )
                    }
                </div>
                {
                    isEditing ? (
                        <form method='post' onSubmit={(e) => saveProfileData(e)}>
                            <div className="show-profile">
                                <h5>Name: </h5>
                                <input type="text" name="name" placeholder='Enter your Name' onChange={(e) => handleChange(e, 'name')} value={userData.name} required />
                                <h5>Email: </h5>
                                <input type="email" name="email" placeholder='Enter your Email' onChange={(e) => handleChange(e, 'email')} value={userData.email} required />
                                <h5>Bio: </h5>
                                <textarea name="bio" rows="8" placeholder='Enter Bio ...' onChange={(e) => handleChange(e, 'bio')} defaultValue={userData.bio} ></textarea>
                                <div></div> {/* empty div dont remove */}
                                <button>Save</button>
                            </div>
                        </form>
                    ) : (
                        <div className="show-profile">
                            <h5>Name: </h5>
                            <p>{userData.name}</p>
                            <h5>Email: </h5>
                            <p>{userData.email}</p>
                            <h5>Bio: </h5>
                            <p style={{whiteSpace: "pre-wrap"}}>{userData.bio}</p>
                        </div>
                    )
                }
                <div className="blog-list">
                    <div className='one-blog-item' onClick={gotoBlog}>
                        <h6><h5>Title</h5>by {userData.name}</h6>
                        <p>DD/MM/YYYY HH:MM:SS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile