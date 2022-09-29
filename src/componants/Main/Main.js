
import React from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Main.css'

const Main = () => {
    return (
        <div className='shop-part'>      
            <div className="products-part">
                <Products></Products>
            </div>
            <div className="cart-part">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;