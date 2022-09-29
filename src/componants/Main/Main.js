
import React from 'react';
import Products from '../Products/Products';
import './Main.css'

const Main = () => {
    return (
        <div className='shop-part'>
            <div className="products-part">
                <h2>Select Today Practice</h2>
                <Products></Products>
            </div>
            <div className="cart-part">
                <h4>Soriful Islam</h4>
            </div>
        </div>
    );
};

export default Main;