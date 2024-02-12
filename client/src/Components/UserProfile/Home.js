import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      {/* <!-- Content area --> */}
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="border border-black border-1 text-white p-3">
              Column 1
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="border border-black border-1 text-white p-3">
              Column 2
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="border border-black border-1 text-white p-3">
              Column 3
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="border border-black border-1 text-white p-3">
              Column 4
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="border border-black border-1 text-white p-3">
              Column 5
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="border border-black border-1 text-white p-3">
              Column 6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
