import React from 'react';
import PropTypes from 'prop-types'; 
import Product from '../Product';

const ProductItem = ({ product, onAddToCart }) => (
 <div style={{marginBottom: 20}}>
   <Product 
    title={product.title} 
    price={product.price} 
    quantity={product.inventory} />

    <button 
     onClick={onAddToCart} 
     disabled={product.inventory > 0 ? '' : 'disabled'}>

        {product.inventory > 0 ? 'Add To Cart' : 'Sold Out'}

    </button>
 </div>
);

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        inventory: PropTypes.number
    }).isRequired,

    onAddToCart: PropTypes.func.isRequired
};

export default ProductItem;