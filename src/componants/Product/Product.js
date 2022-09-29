import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, index, picture} = props.product;
    console.log(picture);
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p>Name: {name}</p>
            <p>Proce: {index}</p>
            
        </div>
    );
};

export default Product;