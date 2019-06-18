import { ADD_BOOK, REMOVE_BOOK } from '../actions/constants'



export const addBook = ( bookId, bookList, booksData ) => {
  return {
    type: ADD_BOOK,
    bookId: bookId,
    bookList: bookList,
    booksData: booksData
  }
}

export const removeBook = ( bookId, bookList, booksData ) => {
  return {
    type: REMOVE_BOOK,
    bookId: bookId,
    bookList: bookList,
    booksData: booksData
  }
}