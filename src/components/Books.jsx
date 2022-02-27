import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default function Books({ bookList, handleAddBookToCart }) {
  return (
    <div className="books-wraper">
      <div className="books">
        {bookList.map((book) => (
          <Book
            key={book.bookId}
            bookCover={book.bookCover}
            bookName={book.bookName}
            bookAuthor={book.bookAuthor}
            bookPrice={book.bookPrice}
            handleAddBookToCart={handleAddBookToCart}
          />
        ))}
      </div>
    </div>
  );
}
Books.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookList: PropTypes.array.isRequired,
  handleAddBookToCart: PropTypes.func.isRequired,
};
