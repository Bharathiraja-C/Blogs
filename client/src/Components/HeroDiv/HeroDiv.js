import React from "react";
import './HeroDiv.css';

function HeroDiv(){
    return (
        <div className="hero">
            <div className="text-container" style={{float:"left",marginRight:"150px"}}>
                <p className="welcome"><strong>Welcome</strong></p>
                <p className="club"><strong>To The Club</strong></p>
                <button className="btn btn-dark btn-outline-light my-2 my-sm-0">Start Reading</button>
            </div>
            <div className="image-container">
                <img src="https://i.pinimg.com/564x/23/94/b2/2394b2dcfe17c44ddb52b5f6be98dd05.jpg" width={400} height={300} alt="Icon"/>
            </div>
        </div>
    );
}

export default HeroDiv;
