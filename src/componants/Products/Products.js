
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);


   useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   } ,[]);

   const AddItem = (props) => {
    // console.log(props);
    const getTime = props;
    // console.log(getTime);
    <Cart getTime={getTime}></Cart>
   }


    return (
        <div>
            <h3 className='title-shop'>Select Today Writing</h3>
            <div className='products'>
            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    AddItem={AddItem}
        
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;