import request from 'superagent';
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED } from './constants';


// =============== GET TEXT FROM THE SEARCHFIELD ===============
export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}


// =============== GET BOOKS DATA FROM THE API ===============
export const requestBooks = (query) => (dispatch) => {
  dispatch({type: REQUEST_BOOKS_PENDING});
  console.log("query >>>> ", query);
  request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ 
      q: query,
      maxResults: 40 })
    .then(data => dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data.body.items}))
    .catch(error => dispatch({ type: REQUEST_BOOKS_FAILED, payload: error }))
}