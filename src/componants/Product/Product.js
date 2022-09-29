import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, forthis, picture, about, time} = props.product;
    console.log(picture);
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <div className='card-about'>
                <p> {about}</p>
                <h4>For Age: {forthis}</h4>
                <h4>Time Requarement: {time}s</h4>
                <button className='add-button'>Add To List</button>
            </div>
        </div>
    );
};

export default Product;