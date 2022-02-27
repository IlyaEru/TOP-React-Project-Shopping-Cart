import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Book({
  bookCover,
  bookName,
  bookAuthor,
  bookPrice,
  handleAddBookToCart,
}) {
  return (
    <div className="book">
      <Link to={`/books/${bookName}`}><img className="book-cover" src={bookCover} alt="book cover" /></Link>
      <div className="book-details">
        <Link to={`/books/${bookName}`}><div className="book-name">{bookName}</div></Link>
        <br />
        <div className="book-author">{bookAuthor}</div>
        <div className="book-price">{bookPrice}</div>
        <button onClick={handleAddBookToCart} className="btn cart-btn" type="button">Add to cart</button>
      </div>
    </div>
  );
}
Book.propTypes = {
  bookCover: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  bookPrice: PropTypes.string.isRequired,
  handleAddBookToCart: PropTypes.func.isRequired,
};
