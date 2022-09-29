
import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className=''>

            <div className='container'>
                <img src="./my-bg2.png" alt="" ></img>
                <div className='information'>
                    <h5>Soriful Islam Fahim</h5>
                    <p><small>Nobigonj, Habigonj</small></p>
                </div>
            </div>

            <div className='featness'>
                <div>
                    <h3>55<small>kg</small></h3>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <h3>5.5</h3>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <h3>19<small>y</small></h3>
                    <p><small>Age</small></p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='time-spend'>
                <p><span>10</span><small>s</small></p>
                <p><span>20</span><small>s</small></p>
                <p><span>30</span><small>s</small></p>
                <p><span>40</span><small>s</small></p>
                <p><span>50</span><small>s</small></p>
            </div>
            <h3>Exercise Details</h3>
            <div className='excer-size'>
                <h4>Exercise time</h4>
                <p><small><span>0</span> seconds</small></p>
            </div>
            <div className='break-time'>
                <h4>Break Time</h4>
                <p><small><span>0</span> seconds</small></p>
            </div>
            <button className='active-button'>Activity Completed</button>
        </div>
    );
};

export default Cart;