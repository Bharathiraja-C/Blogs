import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogRead.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function BlogPostPage() {
	// Example blog post data
	let { id } = useParams();

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

	return (
		<div className="blog-post-container">
			<div className="blog-post">
				<h1>{blogPost.title}</h1>
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
