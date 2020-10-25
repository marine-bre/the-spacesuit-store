import React from 'react';

const ImageCard = ({ name, price, description, url, alt }) => {
    return (

        <div className="image-container">
            <div className="text-on-image">
                <h1>{name}</h1>
                <br></br>
                <h2>Price: {price}</h2>
                <p>{description}</p>
            </div>
            <img src={url} alt={alt}></img>
        </div>
    )
}

export default ImageCard;