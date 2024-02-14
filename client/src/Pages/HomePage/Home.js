import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";


function Home() {
	const navigate = useNavigate();
	const [blogData, setBlogData] = useState([]);
	// const [search, setSearch] = useState("");
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

	const searchBlog = async (e, search) => {
		e.preventDefault()
		try {
		  const res = await axios.get(`http://localhost:5000/searchBlog/${search}`)
		  if (res.status === 200) {
			navigate(`/blog/${res.data.bestMatchId}`)
		  }
		} catch (error) {
		  console.log(error)
		}
	  }

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
                      onClick={() => navigate(`/blog/${row._id}`)}
                      className="col-md-3 mb-2"
                      key={index}
                    >
                      <div className="text-black p-2">
                        <p>Author: {row.author}</p>
                        <h6>{row.title}</h6>
                        <p
                          style={{
                            color: "gray",
                            fontSize: "0.8rem",
                            marginTop: "auto",
                          }}
                        >
                          {formatDistanceToNow(new Date(row.createdAt))} ago
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
                    onClick={() => navigate(`/blog/${row._id}`)}
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
                      <h6 style={{ marginTop: "0px" }}>{row.title}</h6>
                      <p className="content">{row.content.substring(0, 110)}</p>

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
									<button onClick={(e) => searchBlog(e, 'Technology')} className="button" type="submit">
										Technology
									</button>
									<button onClick={(e) => searchBlog(e, 'Humans')} className="button">
										Humans
										</button>
									<button onClick={(e) => searchBlog(e, 'React')} className="button">
										React
									</button>
									<button onClick={(e) => searchBlog(e, 'CI/CD')} className="button">
										CI/CD
									</button>
									<button onClick={(e) => searchBlog(e, 'Analysis')} className="button">Analysis</button>
									<button onClick={(e) => searchBlog(e, 'Python')} className="button">
										Python
									</button>
									<button onClick={(e) => searchBlog(e, 'Language')} className="button">
										Language
									</button>
									<button onClick={(e) => searchBlog(e, 'JAVA')} className="button">JAVA</button>
									<button onClick={(e) => searchBlog(e, 'Spring Boot')} className="button">Spring Boot</button>
									<button onClick={(e) => searchBlog(e, 'Organizations')} className="button">Organizations</button>
									<button onClick={(e) => searchBlog(e, 'Networking')} className="button">
										Networking
									</button>

									<button  onClick={(e) => searchBlog(e, 'Development')} className="button">Development</button>
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
