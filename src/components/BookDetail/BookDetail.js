import React,{Fragment} from 'react';
import './BookDetail.css';
const BookDetail = ({name,image}) =>{
  return(
    <Fragment>
    <section className = 'bookDetailContainer'>
        <img src = {`${image}`} className = 'image'/>
        <h3 className = 'name'>{name}</h3>
   </section>
    </Fragment>
  )
}
export default BookDetail;
