import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogRead.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function BlogPostPage() {
	// Example blog post data
	let { id } = useParams();
	const [color, setColor] = useState("");
	const [icon, setIcon] = useState("bx bx-heart");
	useEffect(() => {
		const getBlogData = async () => {
			try {
				const res = await axios.get(
					`http://localhost:5000/getBlogById/${id}`
				);
				if (res.status === 200) {
					setBlogPost(res.data);
				}
			} catch (error) {
				navigate("/");
			}
		};

		getBlogData();
	}, [id]); // Add id as a dependency here

	const navigate = useNavigate();

	const [blogPost, setBlogPost] = useState({});

	useEffect(() => {
		const getBlogData = async () => {
			try {
				const res = await axios.get(
					`http://localhost:5000/getBlogById/${id}`
				);
				if (res.status === 200) {
					setBlogPost(res.data);
				}
			} catch (error) {
				navigate("/");
			}
		};

		getBlogData();
	}, []);

	const editBlog = async () => {
		sessionStorage.setItem("editId", id);
		navigate("/newBlog");
	};

	const deleteBlog = async () => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/deleteBlogById/${id}`
			);
			if (res.status === 200) {
				navigate(`/User/${localStorage.getItem("id")}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const addLikes = async () => {
		if (localStorage.getItem('id')) {
			try {
				const res = await axios.get(`http://localhost:5000/addLikes/${id}/${localStorage.getItem('id')}`)
				if (res.status === 200) {
					setBlogPost(res.data)
				}
			} catch (error) {
				console.log(error)
			}
		}
		else {
			alert("SignIn to Like the blog")
		}
	}
	const removeLikes = async () => {
		try {
			const res = await axios.get(`http://localhost:5000/removeLikes/${id}/${localStorage.getItem('id')}`)
			if (res.status === 200) {
				setBlogPost(res.data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const shareButton = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			alert('URL copied to clipboard');
		} 
		catch (error) {
			console.error('Failed to copy URL to clipboard:', error);
		}
	}

		return (

			<div className="blog-post-container">
				<div className="blog-post" >
					<h1>{blogPost.title}</h1>
					{
						blogPost.likes ? (
							blogPost.likes.includes(localStorage.getItem("id")) ? (
								<i onClick={removeLikes} style={{ color: "red", fontSize: "30px" }} class="bx bxs-heart"></i>
							) : (
								<i onClick={addLikes} style={{ fontSize: "30px" }} class="bx bx-heart"></i>
							)
						) : (
							<i onClick={addLikes} style={{ fontSize: "30px" }} class="bx bx-heart"></i>
						)
					}
					&nbsp;&nbsp;
					<i onClick={shareButton}style={{ fontSize: "30px" }} class='bx bxs-share-alt'></i>
					<br/>
					{
						blogPost.likes?
						(blogPost.likes.length) : (<>0</>)
					} Likes

					<p>
						<strong>Author:</strong>{" "}
						<Link to={`/User/${blogPost.user_id}`}>
							{blogPost.author}
						</Link>
					</p>
					<p>
						<strong>Date Modified:</strong>{" "}
						{blogPost.createdAt
							? formatDistanceToNow(new Date(blogPost.createdAt)) +
							" ago"
							: "Unknown"}
					</p>
					<div className="blog-content">
						<p style={{ whiteSpace: "pre-wrap" }}>{blogPost.content}</p>
						<div
							className="blog-buttons"
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div>
								{localStorage.getItem("id") === blogPost.user_id ? (
									<>
										<button onClick={editBlog}>Edit</button>
										<button onClick={deleteBlog}>Delete</button>
									</>
								) : null}
							</div>

							<button onClick={() => navigate("/")}>
								Back to Home
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	export default BlogPostPage;
