import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {img, name, price, ratings, seller} = product;
    
    return (
        <div className='product'>
            <img src= {img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            <button className='btn-cart'>
                    <p onClick={()=>{handleAddToCart(product)}}>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}/>
            </button>

        </div>
    );
};

export default Product;