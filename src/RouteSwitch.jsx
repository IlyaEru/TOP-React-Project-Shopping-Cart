import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import App from './components/App';
import Header from './components/Header';
import Books from './components/Books';
import About from './components/About';
import Cart from './components/Cart';
import BookDetails from './components/BookDetails';
import harryPotterImg from './img/books/harry-potter.jpeg';
import nameOfWindImg from './img/books/name-of-wind.jpg';
import sapiensImg from './img/books/sapiens.jpeg';
import AmImg from './img/books/5-am.jpg';
import gameOfThronesImg from './img/books/game-thrones.jpg';
import wayOfKingsImg from './img/books/way-of-kings.jpg';
import hobbitImg from './img/books/hobbit.jpg';
import vinciCodeImg from './img/books/code.jpg';
import thousandImg from './img/books/1984.jpg';
import witcherImg from './img/books/witcher.jpg';
import aragonImg from './img/books/aragon.jpg';
import duneImg from './img/books/dune.jpg';

export default function RouteSwitch() {
  const [cart, setCart] = useState({});
  const [bookList] = useState([{
    bookCover: harryPotterImg,
    bookName: "Harry Potter and the Sorcerer's Stone",
    bookAuthor: 'J. K. Rowling',
    bookPrice: '19.99$',
    bookId: uniqid(),
  }, {
    bookCover: nameOfWindImg,
    bookName: 'The Name of the Wind',
    bookAuthor: 'Patrick Rothfuss',
    bookPrice: '29.99$',
    bookId: uniqid(),
  }, {
    bookCover: sapiensImg,
    bookName: 'Sapiens: A Brief History of Humankind',
    bookAuthor: 'Yuval Noah Harari',
    bookPrice: '25.99$',
    bookId: uniqid(),
  }, {
    bookCover: AmImg,
    bookName: 'The 5 AM Club : Own Your Morning. Elevate Your Life.',
    bookAuthor: 'Robin Sharma',
    bookPrice: '24.99$',
    bookId: uniqid(),
  }, {
    bookCover: gameOfThronesImg,
    bookName: 'A Game of Thrones : Book 1 of A Song of Ice and Fire',
    bookAuthor: 'George R. R. Martin',
    bookPrice: '34.99$',
    bookId: uniqid(),
  }, {
    bookCover: wayOfKingsImg,
    bookName: 'The Way of Kings',
    bookAuthor: 'Brandon Sanderson',
    bookPrice: '39.99$',
    bookId: uniqid(),
  }, {
    bookCover: hobbitImg,
    bookName: 'The Hobbit',
    bookAuthor: 'J. R. R. Tolkien',
    bookPrice: '14.99$',
    bookId: uniqid(),
  }, {
    bookCover: vinciCodeImg,
    bookName: 'The Da Vinci Code',
    bookAuthor: 'Dan Brown',
    bookPrice: '22.99$',
    bookId: uniqid(),
  }, {
    bookCover: thousandImg,
    bookName: '1984',
    bookAuthor: 'George Orwell',
    bookPrice: '24.99$',
    bookId: uniqid(),
  }, {
    bookCover: witcherImg,
    bookName: 'The Last Wish',
    bookAuthor: 'Andrzej Sapkowski',
    bookPrice: '21.99$',
    bookId: uniqid(),
  }, {
    bookCover: aragonImg,
    bookName: 'Eragon',
    bookAuthor: 'Christopher Paolini',
    bookPrice: '16.99$',
    bookId: uniqid(),
  }, {
    bookCover: duneImg,
    bookName: 'Dune',
    bookAuthor: 'Frank Herbert',
    bookPrice: '18.99$',
    bookId: uniqid(),
  },
  ]);
  const handleAddBookToCart = (e, optionalBookName = null, optionalAmount = null) => {
    let bookName;
    if (optionalBookName === null) {
      bookName = e.currentTarget.parentNode.querySelector('.book-name').textContent;
    } else {
      bookName = optionalBookName;
    }
    const bookIndex = bookList.findIndex((book) => book.bookName === bookName);
    if (Object.prototype.hasOwnProperty.call(cart, bookName)) {
      const cartCopy = cart;
      if (optionalAmount === null) {
        cartCopy[bookName].amount += 1;
      } else {
        cartCopy[bookName].amount = optionalAmount;
      }
      setCart({ ...cartCopy });
    } else {
      const newCartBook = {
        amount: 1,
        price: bookList[bookIndex].bookPrice,
      };
      const cartCopy = cart;
      cartCopy[bookName] = newCartBook;
      setCart({ ...cartCopy });
    }
  };
  const handleRemoveBookFromCart = (removedBookName) => {
    const cartCopy = cart;
    const cartKeys = Object.keys(cartCopy)
      .filter((key) => key !== removedBookName);
    const updatedCart = cartKeys
      .reduce((cur, key) => Object.assign(cur, { [key]: cartCopy[key] }), {});
    setCart({ ...updatedCart });
  };
  return (
    <BrowserRouter>
      <Header bookList={bookList} cart={cart} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<Books handleAddBookToCart={handleAddBookToCart} bookList={bookList} />} />
        <Route path="/books/:bookName" element={<BookDetails handleAddBookToCart={handleAddBookToCart} bookList={bookList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart handleRemoveBookFromCart={handleRemoveBookFromCart} cart={cart} handleAddBookToCart={handleAddBookToCart} bookList={bookList} />} />
      </Routes>
    </BrowserRouter>
  );
}
