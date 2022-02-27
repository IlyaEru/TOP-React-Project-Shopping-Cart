/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Cart({
  bookList,
  cart,
  handleAddBookToCart,
  handleRemoveBookFromCart,
}) {
  const [totalCart, setTotalCart] = useState(0);
  const cartKeys = Object.keys(cart);
  let totalPrice = 0;
  cartKeys.forEach((key) => {
    totalPrice += Number(cart[key].price.split('$')[0]) * cart[key].amount;
  });
  const handleBookAmountChange = (e) => {
    const bookName = e.target.parentNode.parentNode.querySelector('.name').textContent;
    let quantity = e.target.value;
    if (quantity < 0) {
      quantity = 0;
    }
    handleAddBookToCart(null, bookName, quantity);
  };
  const handleBookRemove = (e) => {
    const removedBook = e.currentTarget.parentNode.parentNode.querySelector('.name').textContent;
    handleRemoveBookFromCart(removedBook);
  };
  const booksInCart = Object.keys(cart);
  booksInCart.forEach((item, index) => {
    if (item === 'total') {
      booksInCart.splice(index, 1);
    }
  });
  useEffect(() => {
    totalPrice = Math.floor(totalPrice * 100) / 100;
    setTotalCart(totalPrice);
  }, [cart]);
  return (
    <div className="cart-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th className="price-td" scope="col">Quantity</th>
            <th className="price-td" scope="col">Price</th>
            <th className="total-td" scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {booksInCart.map((item) => (
            <tr key={item}>
              <td className="cart-book-details">
                <img className="cart-book-details__img" src={bookList[bookList.findIndex((book) => book.bookName === item)].bookCover} alt="cover" />
                <div className="cart-book-details__text">
                  <span className="name">{bookList[bookList.findIndex((book) => book.bookName === item)].bookName}</span>
                  <span className="author">{bookList[bookList.findIndex((book) => book.bookName === item)].bookAuthor}</span>
                </div>
              </td>
              <td className="price-td">
                <input min={0} max={99} onInput={handleBookAmountChange} defaultValue={cart[item].amount} type="number" id="new-amount-input" />
              </td>
              <td className="price-td">{cart[item].price}</td>
              <td className="total-td">
                {Math.floor(Number(bookList[bookList.findIndex((book) => book.bookName === item)].bookPrice.split('$')[0]) * cart[item].amount * 100) / 100}
                $
              </td>
              <td className="delete-td"><button onClick={handleBookRemove} className="btn cart-delete-btn" type="button">Delete</button></td>
            </tr>
          ))}
          <tr className="cart-summary">
            <td className="empty-td" />
            <td />
            <td className="cart-summary__btns">
              <Link to="/books"><button type="button" className="btn cart-summary__btns-continue">Continue Shopping</button></Link>
            </td>
            <td className="cart-summary__price">
              {totalCart}
              $
            </td>
            <td className="checkout-td">
              <button type="button" className="btn cart-summary__btns-checkout">Checkout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
Cart.propTypes = {
  bookList: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  handleAddBookToCart: PropTypes.func.isRequired,
  handleRemoveBookFromCart: PropTypes.func.isRequired,
};
