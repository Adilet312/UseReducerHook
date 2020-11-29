import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import { AiFillRead, AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';


const CRUD = ({deleteBook,book}) =>{
  return(
    <Fragment>
      <Link to = {`/book/${book.id}`}><AiFillRead style ={{color:"purple"}} /></Link>
      <AiOutlineEdit style ={{color:"purple"}}/>
      <MdDeleteForever style ={{color:"purple"}} onClick = {() => deleteBook(book)}/>
    </Fragment>
  )
}

export default CRUD;
