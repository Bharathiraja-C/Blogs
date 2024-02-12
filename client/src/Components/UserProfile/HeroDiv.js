import React from "react";
import './HeroDiv.css';
function HeroDiv(){
    return (
        <div className="hero">
          <div style={{float:"left",marginRight:"150px"}}>
          <p className="welcome"><strong>Welcome</strong></p>
          <p className="club"><strong>To The Club</strong></p>
          <button className="butn">Start Reading</button>
          </div>
          <div >
            <img src="https://static.vecteezy.com/system/resources/previews/000/518/198/original/woman-working-with-computer-bright-colorful-vector-illustration.jpg" width={500} alt="Icon"/>
          </div>
        </div>
      );
}

export default HeroDiv;
