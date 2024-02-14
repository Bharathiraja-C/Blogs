import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';

const UserProfile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();

	const [userData, setUserData] = useState({});
	const [blogData, setBlogData] = useState([{}]);
	const navigate = useNavigate();

	useEffect(() => {
		const getUserData = async () => {
			try {
				const res = await axios.get(
					`http://localhost:5000/getUserData/${id}`
				);
				if (res.status === 200) {
					setUserData(res.data.userData);
					setBlogData(res.data.blogData);
				}
			} catch (error) {
				console.log(error);
			}
		};

		getUserData();
	}, []);

	const saveProfileData = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.put(
				`http://localhost:5000/editUserData/${id}`,
				userData
			);
			if (res.status === 200) {
				setUserData(res.data.user);
			}
		} catch (error) {
			console.log(error);
		}
		setIsEditing(false);
	};

	const handleChange = (e, colName) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			[colName]: e.target.value,
		}));
	};

	const logout = (id) => {
		localStorage.clear();
		navigate(`/`);
	};

	return (
		<>
			<div className="profile-main">
				<div className="profile-head">
					<h3>Profile</h3>
					{isEditing ? null : id === localStorage.getItem("id") ? (
						<button onClick={() => setIsEditing(true)}>Edit</button>
					) : null}
				</div>
				{isEditing ? (
					<form
						method="post"
						onSubmit={(e) => saveProfileData(e)}
					>
						<div className="show-profile">
							<h5>Name: </h5>
							<input
								type="text"
								name="name"
								placeholder="Enter your Name"
								onChange={(e) => handleChange(e, "name")}
								value={userData.name}
								required
							/>
							<h5>Email: </h5>
							<input
								type="email"
								name="email"
								placeholder="Enter your Email"
								onChange={(e) => handleChange(e, "email")}
								value={userData.email}
								required
							/>
							<h5>Bio: </h5>
							<textarea
								name="bio"
								rows="8"
								placeholder="Enter Bio ..."
								onChange={(e) => handleChange(e, "bio")}
								defaultValue={userData.bio}
							></textarea>
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
						<p style={{ whiteSpace: "pre-wrap" }}>{userData.bio}</p>
					</div>
				)}
				{isEditing ? null : id === localStorage.getItem("id") ? (
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<button
							className="button-style"
							onClick={() => navigate("/newBlog")}
						>
							Add a Blog
						</button>
						<button
							className="button-style"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				) : null}
				<div className="blog-list">
					{blogData.map((row, index) => {
						return row.title ? (
							<div
								key={index}
								className="one-blog-item"
								onClick={() => navigate(`/blog/${row._id}`)}
							>
								<h5>
									{row.title}
									<br />
									<h6>by {row.author}</h6>
								</h5>

								<p>{formatDistanceToNow(new Date(row.createdAt))} ago</p>
							</div>
						) : null;
					})}
				</div>
			</div>
		</>
	);
};

export default UserProfile;
