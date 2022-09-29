
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

   useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   } ,[])

    return (
        <div>
            <h3 className='title-shop'>Select Today Writing</h3>
            <div className='products'>
            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;