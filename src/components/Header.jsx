/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartIcon from '../img/cart.svg';

export default function Header({ cart }) {
  const cartKeys = Object.keys(cart);
  let total = 0;
  cartKeys.forEach((key) => {
    total += Number(cart[key].amount);
  });
  return (
    <header>
      <Link to="/">
        <h1 className="hero">BOOK HUB</h1>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="cart-wraper">
        <NavLink className="cart-link" to="/cart">
          <img className="cart-img" src={cartIcon} alt="cart" />
          <span className="cart-number">{total}</span>
        </NavLink>
      </div>
    </header>
  );
}
Header.propTypes = {
  cart: PropTypes.object.isRequired,
  // bookList: PropTypes.array.isRequired,
};
