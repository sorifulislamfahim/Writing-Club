
import { useEffect, useState } from 'react';
import './Cart.css';
import logo from './my-bg2.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Cart = (props) => {
    console.log(props);

    const [times, setTimes] = useState([0])

    const notify = () => {
        toast("Wow so easy!")
    };

    useEffect (() => {
        const getData = localStorage.getItem('breakTime')
        setTimes(getData)
    } ,[])

const addToBreak = props => {
    const breakTime = props;
    setTimes(breakTime); 
    localStorage.setItem('breakTime', breakTime);  
}

    return (
        <div className='cart-container'>

            <div className='container'>
                <img className='profile' src={logo} alt="" ></img>
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
                <p><span onClick={() => addToBreak(10)}>10</span><small>s</small></p>
                <p><span onClick={() => addToBreak(20)}>20</span><small>s</small></p>
                <p><span onClick={() => addToBreak(30)}>30</span><small>s</small></p>
                <p><span onClick={() => addToBreak(40)}>40</span><small>s</small></p>
                <p><span onClick={() => addToBreak(50)}>50</span><small>s</small></p>
            </div>
            <h3>Exercise Details</h3>
            <div className='excer-size'>
                <h4>Exercise time</h4>
                <p><small><span>0</span> seconds</small></p>
            </div>
            <div className='break-time'>
                <h4>Break Time</h4>
                <p><small><span>{times}</span> seconds</small></p>
            </div>
            <div>
                <button onClick={notify} className='active-button'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;