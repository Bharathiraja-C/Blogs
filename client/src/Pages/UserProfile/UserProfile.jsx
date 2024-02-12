import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css'

const UserProfile = () => {

    const [isEditing, setIsEditing] = useState(false)
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john@gmail.com",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero voluptatum incidunt, deserunt architecto nam odio labore dignissimos rem nemo voluptates est aliquam autem expedita quidem fugit recusandae, veritatis dolore."

    })

    const { userId } = useParams();
    console.log(userId)

    const saveProfileData = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    const handleChange = (e, colName) => {
        setUserData(prevUserData => ({
            ...prevUserData,
            [colName]: e.target.value
        }));
    }

    return (
        <div className='profile-main'>
            <div className="profile-head">
                <h3>Profile</h3>
                {
                    isEditing ? null : (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
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
                        <p>{userData.bio}</p>
                    </div>
                )
            }
            <div className="blog-list">
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
                <div className='one-blog-item'>
                    <h6><h5>Title</h5>by {userData.name}</h6>
                    <p>DD/MM/YYYY HH:MM:SS
                        <br />
                        <button className='edit-button'>Edit</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile