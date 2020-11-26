import React, {Fragment,useContext} from 'react';
import Book from './Book';
import './css/List.css';
import {BookContext} from './App';

const List = () => {
  const {books_data} = useContext(BookContext);
  console.log("data from list: ",books_data);
  return(
    <ul>
      {
        books_data.map( book => <li><Book name = {book.name} image = {book.image}/></li>)
      }
    </ul>

  )
}
export default List;
