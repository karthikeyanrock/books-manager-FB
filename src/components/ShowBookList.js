import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { useContext } from 'react';
import { MainContext } from '../App';

function ShowBookList() {
  const {searched,setSearched, filteredList, setFilteredList, books, setBooks} = useContext(MainContext)
  

  useEffect(() => {
    axios
      .get('https://booksmanagerbackend.vercel.app/allbooks')
      .then((res) => {
        setBooks(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []); 

  



  const bookList =
    books.length === 0
      ? 'there is no book record!'
      : filteredList.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;