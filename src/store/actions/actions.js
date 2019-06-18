import request from 'superagent';
import * as constants from './constants.js';


// =============== GET TEXT FROM THE SEARCHFIELD ===============
export const setSearchField = (text) => {
  return {
    type: constants.CHANGE_SEARCH_FIELD,
    payload: text
  }
}

const requestBooksPending = () => {
  return { type: constants.REQUEST_BOOKS_PENDING }
}

const requestBooksSuccess = ( booksData ) => {
  return { 
    type: constants.REQUEST_BOOKS_SUCCESS, 
    payload: booksData.body.items}
}

const requestBooksFailed = ( error ) => {
  return { 
    type: constants.REQUEST_BOOKS_FAILED, 
    payload: error }
}


// =============== GET BOOKS DATA FROM THE API ===============
export const requestBooks = ( query ) => ( dispatch ) => {
  dispatch(requestBooksPending());
  request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ 
      q: query,
      maxResults: 40 })
    .then(booksData => dispatch(requestBooksSuccess(booksData)))
    .catch(error => dispatch(requestBooksFailed(error)))
}