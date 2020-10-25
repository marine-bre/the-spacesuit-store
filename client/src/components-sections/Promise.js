import React from "react";


const Promise = () => {

  return (
    <div id="promise-div"> 
      <div id = "quality" className = "promises">
        <img
          src={require("../pictures/iconfinder_Crystal_Shard_2913097 (1).png")}
        alt="quality"></img>
        <div className = "pro-text">
          <div className = "pro-title-sq">
            <span className = "pro-number">// 01</span>
            <span className = "pro-title"> quality</span>
          </div>
          <span className="pro-desc">
            {" "}
            Here at the spacesuit store, we promise you the highest level
            quality. We use materials that have been approved by the NASA and
            the European Space Agency (ESA), so you know you're getting the
            best.
          </span>
        </div>
      </div>
      <div id="design" className="promises">
        <span className="pro-desc">
          {" "}
          Our team, composed of the greatest engineers in the aerospace industry
          comnbined with world renowned fashion designers, will ensure that your
          suit is not only safe and ergonomic but also up to the latest trends.
        </span>
        <img src={require("../pictures/iconfinder_Sword_2913105.png")} alt="design"></img>
        <div className="pro-text">
          <div className="pro-title-sq">
            <span className="pro-number">// 02</span>
            <span className="pro-title">design</span>
          </div>
        </div>
      </div>
      <div id="aftercare" className="promises">
        <img
          src={require("../pictures/iconfinder_Destructive_Magic_2913121.png")} alt="aftercare"
        ></img>
        <div className="pro-text">
          <div className="pro-title-sq">
            <span className="pro-number">// 03</span>
            <span className="pro-title">aftercare</span>
          </div>
          <span className="pro-desc">
            {" "}
            We handle your suits after every one of your space travels. Our team
            will clean and polish all components of the suit with the greatest
            care with expert knowledge and environment friendly equipment.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Promise;
