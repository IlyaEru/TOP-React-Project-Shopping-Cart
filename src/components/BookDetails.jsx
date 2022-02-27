import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function BookDetails({ bookList, handleAddBookToCart }) {
  const { bookName } = useParams();
  const bookIndex = bookList.findIndex((book) => book.bookName === bookName);
  const bookObject = bookList[bookIndex];
  return (
    <div className="book-details-container">
      <div className="book-details-wraper">
        <div className="book-image">
          <img src={bookObject.bookCover} alt="cover" />
        </div>
        <div className="book-details">
          <div className="book-name">{bookName}</div>
          <br />
          <div className="book-author">{bookObject.bookAuthor}</div>
          <div className="book-price">{bookObject.bookPrice}</div>
          <button onClick={handleAddBookToCart} className="btn cart-btn" type="button">Add to cart</button>
        </div>
      </div>
    </div>

  );
}

BookDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookList: PropTypes.array.isRequired,
  handleAddBookToCart: PropTypes.func.isRequired,
};
