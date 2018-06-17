import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const { image, name, price, desc, status } = this.props.details; // es6 destructuring
        return (
            <li className="menu-fish">
                <img src={image} alt={name} /> {/* without quotes */}
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button>Add To Cart</button>
            </li>
        );
    }
}

export default Fish;