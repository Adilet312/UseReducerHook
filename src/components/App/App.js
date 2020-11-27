import React,{useState,useEffect,useReducer,Fragment} from 'react';
import List from '../List/List';
import './App.css';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';
import {without,findIndex} from 'lodash';
export const BookContext = React.createContext();
const reducer = (state,action) =>{
	switch(action.type){
		case 'BOOKS_FETCH_SUCCESS':
			return {...state, isLoading: false, isError: false, books_data: action.books}
		case 'BOOKS_FETCH_FAILURE':
			return {...state, isLoading: false, isError: true, books_data: action.books}
		case 'SEARCH_BOOKS':
		console.log("search word from reducer: " ,action.search);
			return ({...state, isLoading: false, isError: false, books_data: action.search ? state.books_data.filter(book => book.name.toLowerCase().includes(action.search)):state.books_data})

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
const [searchTerm, setSearchTerm] = useState('');

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
const onSearch = (term_search) =>{

	dispatchBooks({
		type:'SEARCH_BOOKS',
		search:term_search.toLowerCase(),
		books:books
	})
	setSearchTerm(term_search)

}
const {isLoading, isError, books_data} = books;
	return(
				<main>
				    {isError && <h1>Something went wrong . . .</h1>}
          <BookContext.Provider value = {{books_data,onSearch,searchTerm}}>
						<Navigation/>
						{
						 isLoading?<h1>Loading ...</h1>: <List/>
						}
					</BookContext.Provider>
				</main>
	)
}
export default App;
