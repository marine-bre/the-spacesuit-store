import React from "react";


const Promise = () => {

  return (
    <div id="promise-div">
      {/* <div id="quality" className="promises">
        <img
          src='https://raw.githubusercontent.com/marine-bre/the-spacesuit-store/master/client/src/pictures/iconfinder_Crystal_Shard_2913097%20(1).png'
          alt="quality"></img>
        <div className="pro-text">
          <div className="pro-title-sq">
            <span className="pro-number">\\ 01</span>
            <span className="pro-title"> quality</span>
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
        <img src='https://raw.githubusercontent.com/marine-bre/the-spacesuit-store/master/client/src/pictures/iconfinder_Sword_2913105.png' alt="design"></img>
        <div className="pro-text">
          <div className="pro-title-sq">
            <span className="pro-number">\\ 02</span>
            <span className="pro-title">design</span>
          </div>
        </div>
      </div>
      <div id="aftercare" className="promises">
        <img
          src='https://raw.githubusercontent.com/marine-bre/the-spacesuit-store/master/client/src/pictures/iconfinder_Destructive_Magic_2913121.png' alt="aftercare"
        ></img>
        <div className="pro-text">
          <div className="pro-title-sq">
            <span className="pro-number">\\ 03</span>
            <span className="pro-title">aftercare</span>
          </div>
          <span className="pro-desc">
            {" "}
            We handle your suits after every one of your space travels. Our team
            will clean and polish all components of the suit with the greatest
            care with expert knowledge and environment friendly equipment.
          </span>
        </div>
      </div> */}



      <div className="pro--container" data-aos="fade-right">
        <div className="pro--header">
          <h2 className="pro--title">1. QUALITY</h2>
        </div>
        <div className="pro--text">
          <p>
          Here at the spacesuit store, we promise you the highest level
            quality. We use materials that have been approved by the NASA and
            the European Space Agency (ESA), so you know you're getting the
            best. </p>
        </div>
      </div>

      <div className="pro--container right" data-aos="fade-left">
        <div className="pro--text">
          <p>
          Our team, composed of the greatest engineers in the aerospace industry
          comnbined with world renowned fashion designers, will ensure that your
          suit is not only safe and ergonomic but also up to the latest trends.
        </p>
        </div>
        <div className="pro--header header--right">
          <h2 className="pro--title">2. DESIGN</h2>
        </div>
      </div>

      <div className="pro--container" data-aos="fade-right">
        <div className="pro--header">
          <h2 className="pro--title">3. AFTERCARE</h2>
        </div>
        <div className="pro--text">
          <p>
          We handle your suits after every one of your space travels. Our team
            will clean and polish all components of the suit with the greatest
            care with expert knowledge and environment friendly equipment.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Promise;
