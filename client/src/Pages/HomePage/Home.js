import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import HeroDiv from "../../Components/HeroDiv/HeroDiv"

function Home() {
  return (
    <div className="Home">
      <Navbar />
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
              <div className="col-md-3 mb-2">
                <div className="text-black p-2">
                  <p>its_manii5</p>
                  <h6>
                    Designing for Apple Vision Pro: Lessons Learned from
                    Puzzling Places
                  </h6>

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

              <div className="col-md-3 d-flex flex-column justify-content-between mb-2">
                <div className="text-black p-2">
                  <p>User: User 3</p>
                  <h6>The Internet’s Lonely Urban Design </h6>

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

              <div className="col-md-3 d-flex flex-column justify-content-between mb-2">
                <div className="text-black p-2">
                  <p>User: User 3</p>
                  <h6>
                    Designing for Apple Vision Pro: Lessons Learned from
                    Puzzling Places
                  </h6>

                  <p style={{ color: "gray", fontSize: "0.8rem" }}>feb 2</p>
                </div>
              </div>

              <div className="col-md-3 d-flex flex-column justify-content-between mb-2">
                <div className="text-black p-2">
                  <p>User: User 3</p>
                  <h6>Will AI Replace All Coders? </h6>

                  <p style={{ color: "gray", fontSize: "0.8rem" }}>feb 2</p>
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-between mb-2">
                <div className="text-black p-2">
                  <p>User: User 3</p>
                  <h6>Will AI Replace All Coders? </h6>

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
              <div className="col-md-3 mb-2">
                <div className="text-black p-2">
                  <p>User: User 3</p>
                  <h6>Will AI Replace All Coders? </h6>

                  <p style={{ color: "gray", fontSize: "0.8rem" }}>feb 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "5px" }}>
        <div className="left-content">
          <div className="list-item">
            <div className="p-2">
              <div style={{ display: "flex", alignItems: "center" }}>
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
          </div>
          <div className="list-item">
            <div className="text-black p-2">
              <div style={{ display: "flex", alignItems: "center" }}>
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
              <div style={{ display: "flex", alignItems: "center" }}>
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
          </div>
        </div>
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
              <button className="button">Technology</button>
              <button className="button">Internet</button>
              <button className="button">Machine Learning</button>
              <button className="button">Data Analytics</button>
              <button className="button">AI</button>
              <button className="button">Web Development</button>
              <button className="button">Social Media</button>
              <button className="button">Robotics</button>
              <button className="button">ChatBot</button>
              <button className="button">Networking</button>
              <button className="button">Cloud</button>
              <button className="button">Malware</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
