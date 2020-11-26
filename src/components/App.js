import React,{useState,useEffect,useReducer,Fragment} from 'react';
import List from './List';
import axios from 'axios';
import {without,findIndex} from 'lodash';
import './css/App.css';
export const BookContext = React.createContext();
const reducer = (state,action) =>{
	switch(action.type){
		case 'BOOKS_FETCH_SUCCESS':
			return {...state, isLoading: false, isError: false, books_data: action.books}
		case 'BOOKS_FETCH_FAILURE':
			return {...state, isLoading: false, isError: false, books_data: action.books}
		case 'REMOVE_BOOK':
			return
		case 'ADD_BOOK':
			return
		case 'UPDATE_BOOK':
			return
		default:
			throw new Error();

	}
}
const App = () =>{
const [books,dispatchBooks] = useReducer(reducer, {
	isLoading: false,
	isError: false,
	books_data: []
});


/*Get and Set data */
useEffect(() =>{
 axios.get('./bookList.json')
 .then( (response) => {
	 dispatchBooks({
		 type: 'BOOKS_FETCH_SUCCESS',
		 books: response.data
	 })
 })
 .catch( () =>{
	 dispatchBooks({
		 type: 'BOOKS_FETCH_FAILURE'
	 })
 })

},[])
const {isLoading, isError, books_data} = books;
console.log("data from sate: ",books_data);
	return(
				<Fragment>
          <BookContext.Provider value = {{books_data}}>
						{
						 isLoading?<h1>Loading ...</h1>: <List/>
						}
					</BookContext.Provider>
				</Fragment>
	)
}
export default App;
