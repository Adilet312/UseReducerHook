import React,{useState, Fragment,useContext} from 'react';
import {Link} from 'react-router-dom';
import {BookContext} from '../../App/App';
import './MenuModal.css';
const MenuModal = ({setIsOpen}) =>{
const {books_data} = useContext(BookContext);

  return(
    <Fragment>
      <section className = 'overlay' onClick = {() => setIsOpen(false)}>
        <span onClick = {() => setIsOpen(false)}>X</span>
        <ul className = 'menu'>
          {
            books_data.map( book => <li>{book.created_by}</li>)
          }
        </ul>
      </section>
    </Fragment>
  )
}
export default MenuModal;
