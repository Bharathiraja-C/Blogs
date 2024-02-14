import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import HeroDiv from "../../Components/HeroDiv/HeroDiv";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function Home() {
	const navigate = useNavigate();
	const [blogData, setBlogData] = useState([]);

	useEffect(() => {
		const getAllBlogs = async () => {
			try {
				const res = await axios.get(
					"http://localhost:5000/getAllBlogs"
				);
				if (res.status === 201) {
					setBlogData(res.data);
				}
			} catch (error) {
				console.log(error);
			}
		};

		getAllBlogs();
	}, []);

	return (
		<div className="Home">
			<HeroDiv />
			<div
				className="container-fluid  mt-4 ml-0"
				style={{
					marginLeft: "90px",
					paddingRight: "5px",
					width: "calc(100% - 90px)",
				}}
			>
				<div className="row">
					{/* Title */}
					<div className="col-md-12 mb-3">
						<h3 className="text-start">Trending Tales</h3>
					</div>

					{/* Blog Previews */}
					<div className="col-md-12 mb-4 offset-md-1 text-start">
						<div className="row gap-3 ">
							{blogData ? (
								blogData.map((row, index) =>
									index <= 5 ? (
										<div
											onClick={() =>
												navigate(`/blog/${row._id}`)
											}
											className="col-md-3 mb-2"
											key={index}
										>
											<div className="text-black p-2">
												<p>User: {row.author}</p>
												<h6>{row.title}</h6>
												<p
													style={{
														color: "gray",
														fontSize: "0.8rem",
														marginTop: "auto",
													}}
												>
													{formatDistanceToNow(
														new Date(row.createdAt)
													)}{" "}
													ago
												</p>
											</div>
										</div>
									) : null
								)
							) : (
								<>Loading ...</>
							)}
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-12">
						{blogData ? (
							blogData.map((row, index) =>
								index > 5 ? (
									<div
										onClick={() =>
											navigate(`/blog/${row._id}`)
										}
										style={{ cursor: "pointer" }}
										className="list-item "
									>
										<div className="p-2">
											<div className="user-info">
												<img
													src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain"
													alt="Profile"
												/>
												<p
													style={{
														marginBottom: "0px",
													}}
												>
													{row.author}
												</p>
											</div>
											<h6 style={{ marginTop: "0px" }}>
												{row.title}
											</h6>
											<content>{row.content}</content>

											<p
												style={{
													color: "gray",
													fontSize: "0.8rem",
													marginTop: "auto",
												}}
											>
												{formatDistanceToNow(
													new Date(row.createdAt)
												)}{" "}
												ago
											</p>
										</div>
									</div>
								) : null
							)
						) : (
							<>Loading ...</>
						)}
						{/*<div className="list-item">
        <div className="p-2">
          <div className="user-info">
            <img
              src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain"
              alt="Profile"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <p style={{ marginBottom: "0px" }}>its_manii7</p>
          </div>
          <h6>
            Designing for Apple Vision Pro: Lessons Learned from Puzzling
            Places
          </h6>
          <content>
            The Apple Vision Pro presents new design challenges to consider.
            Here are some of the lessons learned from redesigning Puzzling
            Places from the ground up for the Apple Vision Pro.
          </content>

          <p
            style={{
              color: "gray",
              fontSize: "0.8rem",
              marginTop: "auto",
            }}
          >
            feb 2
          </p>
        </div>
      </div>
      <div className="list-item">
        <div className="p-2">
          <div className="user-info">
            <img
              src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain"
              alt="Profile"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <p style={{ marginBottom: "0px" }}>its_manii7</p>
          </div>
          <h6 style={{ marginTop: "0px" }}>
            Designing for Apple Vision Pro: Lessons Learned from Puzzling
            Places
          </h6>
          <content>
            The Apple Vision Pro presents new design challenges to consider.
            Here are some of the lessons learned from redesigning Puzzling
            Places from the ground up for the Apple Vision Pro.
          </content>

          <p
            style={{
              color: "gray",
              fontSize: "0.8rem",
              marginTop: "auto",
            }}
          >
            feb 2
          </p>
        </div>
          </div>*/}
					</div>
					<div class="col-lg-6 col-md-12 col-sm-">
						<div className="Right-content">
							<div>
								<h5
									style={{
										textAlign: "left",
										marginBottom: "20px",
										fontWeight: "bold",
									}}
								>
									Discover more of what matters to you
								</h5>
								<div className="topic">
									<button className="button">
										Technology
									</button>
									<button className="button">Internet</button>
									<button className="button">
										Machine Learning
									</button>
									<button className="button">
										Data Analytics
									</button>
									<button className="button">AI</button>
									<button className="button">
										Web Development
									</button>
									<button className="button">
										Social Media
									</button>
									<button className="button">Robotics</button>
									<button className="button">ChatBot</button>
									<button className="button">Cloud</button>
									<button className="button">
										Networking
									</button>

									<button className="button">Malware</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
