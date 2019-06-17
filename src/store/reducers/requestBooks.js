import { 
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED } from '../actions/constants.js';
import  { updateObject } from '../utility';


const initialStateBooks = {
  isPending: false,
  booksData: [],
  error: ''
}

const requestBooksPending = ( state, action ) => {
  return updateObject( state, { isPending: true } );
}

const requestBooksSuccess = ( state, action ) => {
  return updateObject( state, { booksData: action.payload, isPending:false } )
}

const requestBooksError = ( state, action ) => {
  return updateObject( state, { error: action.payload, isPending: false } )
}

 const reducer = (state=initialStateBooks, action={}) => {
  switch(action.type) {
    case REQUEST_BOOKS_PENDING: return requestBooksPending( state, action );
    case REQUEST_BOOKS_SUCCESS: return requestBooksSuccess( state, action );
    case REQUEST_BOOKS_FAILED: return requestBooksError( state, action );
    default: return state;
  }
}

export default reducer;