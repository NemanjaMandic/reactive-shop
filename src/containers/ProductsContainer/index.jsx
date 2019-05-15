import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../components/ProductItem';
import ProductsList from '../../components/ProductsList';

const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList title="Products">
     {products ? products.map(product => 
         <ProductItem 
         key={product.id} 
         product={product} 
         onAddToCart={addToCart} />
        ) : <h3>No products</h3>}
    </ProductsList>
);

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,

    addToCart: PropTypes.func.isRequired
}

export default ProductsContainer;