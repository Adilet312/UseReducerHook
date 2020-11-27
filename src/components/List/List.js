import React, {Fragment,useContext} from 'react';
import Book from '../Book/Book';
import {BookContext} from '../App/App';
import './List.css';
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
