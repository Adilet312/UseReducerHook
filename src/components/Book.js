import React,{Fragment} from 'react';
import './css/Book.css';
const Book = ({name,image}) =>{
  return(
    <Fragment>
      <section className = 'card'>
        <img src = {`${image}`} className = 'image'/>
        <h3 className = 'name'>{name}</h3>
      </section>
    </Fragment>
  )
}
export default Book;
