import React from 'react';

function Home() {
    return (
        <div className="main-container">
            <div className="main-container-text">
                <h2>Welcome to the spacesuit store! <br></br></h2>
                <p>
                    Most space agencies, such as the NASA, the European Space Agency and Space X, have already relied on our services. We also have a significant number of confidential individual clients who have requested personnalised suits to be made for them.
                <br /><br /> We offer the best of the best! If you have not yet heard of the superb quality of our products, we invite you to discover our promises to our clients by clicking on the button below. If you are already convinced that you need one of our products,
                feel free to fill the contact form and we will give you a call to discuss your needs. Enjoy!
                    </p>
                <button className="btn" ><a href="#bestsellers">Our most popular products   ⟾</a></button>
                <button className="btn" ><a href="#promise">Our commitments ⟾</a></button>
            </div>
            <div className="main-container-image">
                <img id="main-image" alt="astronaut" src="https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
                <div id="image--frame"></div>
            </div>
        </div>
    );
}

export default Home;