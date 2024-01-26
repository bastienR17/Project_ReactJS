import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Providers/CartContext';
import { Link } from 'react-router-dom'; // Importez le composant Link

function Header() {
    const { cart } = useCart();
    const total = cart.reduce((total, product) => total + Number(product.price), 0);

    const productCounts = cart.reduce((counts, product) => {
        counts[product.title] = (counts[product.title] || 0) + 1;
        return counts;
    }, {});

    return (
        <header>
            <h1>Mon panier</h1>
            <button onClick={() => console.log('Cart clicked')}>
                <FaShoppingCart />
            </button>
            <div>
                {Object.entries(productCounts).map(([title, count], index) => (
                    <div key={index}>
                        <h2>{title} (x{count})</h2>
                        <p>{cart.find(product => product.title === title).price} €</p>
                    </div>
                ))}
                <h2>Total: {total.toFixed(2)} €</h2>
            </div>
            <Link to="/">Retour à la page d'accueil</Link> {/* Ajoutez le lien vers la page d'accueil */}
        </header>
    );
}

export default Header;