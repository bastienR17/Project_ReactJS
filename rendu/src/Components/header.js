import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Providers/CartContext';

function Header() {
    const { cart } = useCart();
    const total = cart.reduce((total, product) => total + product.price, 0);

    return (
        <header>
            <h1>Mon panier</h1>
            <button onClick={() => console.log('Cart clicked')}>
                <FaShoppingCart />
            </button>
            <div>
                {cart.map((product, index) => (
                    <div key={index}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
                <h2>Total: {total}</h2>
            </div>
        </header>
    );
}

export default Header;