import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='blog-section'>
                <h3>1. How Does React Woark ?</h3>
                <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code </p>
            </div>
            <div className='blog-section'>
                <h3>2. What is defarent props and state ?</h3>
                <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className='blog-section'>
                <h3>3. What dose woark UseEfect?</h3>
                <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Blog;