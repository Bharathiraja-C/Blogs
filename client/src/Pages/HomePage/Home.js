import React from "react";
import Navbar from "../../Components/UserProfile/Navbar";
import "./Home.css";
import HeroDiv from '../../Components/UserProfile/HeroDiv';

function Home() {
  return (
    <div>
      <Navbar />
      {/* <HeroDiv /> */}
      <div className="container mt-4 mr-0">
        <div className="row">
          {/* Title */}
          <div className="col-md-12 mb-2">
            <h3 className="text-start">Trending</h3>
          </div>

          {/* Blog Previews */}
          <div className="col-md-12 mb-4 offset-md-1 text-start">
            <div className="row gap-3">
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
                  <h6>Will AI Replace All Coders? </h6>

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
    </div>
  );
}

export default Home;
