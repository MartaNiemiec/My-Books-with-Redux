import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED } from './constants';


// =============== SEARCH STATE ===============
const initialStateSearch = {
  searchField: ''
}

export const searchBooks = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // return Object.assign({}, state, { searchfield: action.payload })
      return { ...state, searchField: action.payload }

    default:
      return state;
  }
}


// =============== BOOKS STATE ===============
const initialStateBooks = {
  isPending: false,
  booksData: [],
  error: ''
}

export const requestBooks = (state=initialStateBooks, action={}) => {
  switch(action.type) {
    case REQUEST_BOOKS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_BOOKS_SUCCESS:
      return { ...state, booksData: action.payload, isPending:false }
    case REQUEST_BOOKS_FAILED:
      return {...state, error: action.payload, isPending: false }
    default:
      return state;
  }
}