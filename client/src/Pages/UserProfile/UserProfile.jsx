import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css'

const UserProfile = () => {

    const [isEditing, setIsEditing] = useState(false)
    const { userId } = useParams();
    console.log(userId)

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
                    <form method='post' onSubmit={() => setIsEditing(false)}>
                        <div className="show-profile">
                            <h5>Name: </h5>
                            <input type="text" name="name" placeholder='Enter your Name' />
                            <h5>Email: </h5>
                            <input type="email" name="email" placeholder='Enter your Email' />
                            <h5>Bio: </h5>
                            <textarea name="bio" rows="10" placeholder='Enter Bio ...'></textarea>
                            <div></div> {/* empty div dont remove */}
                            <button>Save</button>
                        </div>
                    </form>
                ) : (
                    <div className="show-profile">
                        <h5>Name: </h5>
                        <p>John Doe</p>
                        <h5>Email: </h5>
                        <p>Hello@gmail.com</p>
                        <h5>Bio: </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas vero voluptatum incidunt, deserunt architecto nam
                            odio labore dignissimos rem nemo voluptates est aliquam autem
                            expedita quidem fugit recusandae, veritatis dolore.</p>
                    </div>
                )
            }
        </div>
    )
}

export default UserProfile