import React from 'react';
import PropTypes from 'prop-types';    

const Product = ({price, quantity, title}) => (
    <div>
        {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
);

Product.prototype = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
};

export default Product;