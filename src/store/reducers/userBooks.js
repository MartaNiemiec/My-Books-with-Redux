import { ADD_BOOK, REMOVE_BOOK } from '../actions/constants'
import  { updateObject } from '../utility';

const initialUserState = {
    // name:'',
    // email: '',
    // password: '',
    // joined: '',
    readBooks: [],
    wishlist: [],
    favourites: []
}

const addBook = ( state, action ) => {
  // book object
  let book = action.booksData.filter(book => book.id === action.bookId)[0];
  // adding a book to the specific userBookList array 
  const userBookList = state[action.bookList].concat(book);
  // setting the updated userBookList array to the user[bookList] array
  return updateObject(state, { [action.bookList]: userBookList });   
}

const removeBook = ( state, action ) => {
  // create an array without selected book
  const userBookList = state[action.bookList].filter(book => book.id !== action.bookId)
  // setting the updated userBookList array to the user[bookList] 
  return updateObject(state, { [action.bookList]: userBookList })
      
}


const reducer = ( state = initialUserState, action={} ) => {
  switch ( action.type ) {
    case ADD_BOOK: return addBook( state, action );
    case REMOVE_BOOK: return removeBook( state, action );
    default: return state;
  }
}

export default reducer;










// // // =========== Toggle Book's icons and user's state ===========
//   toggleBookHandler = (bookId, bookList) => { // bookLists-> readBooks/wishlist/favourites
//     // create a copy of the user state as user
//     const user = {...this.state.user};
//   // 1. check if the book is in the user's state
//     let isInState = this.isInUserState(bookId, bookList);
//   // 2. if it isn't - add the book
//     if (isInState === false) {
//       this.setState(state => {
//         // book info
//           const book = state.booksData.filter(book => book.id === bookId)[0];
//         // adding a book to the userBookList array (eg. state.user.wishlist)
//           const userBookList = [book].concat(state.user[bookList]);
//         // setting the updated userBookList array to the user[bookList] 
//           user[bookList] = userBookList;
//           return {
//             user
//           }
//         })
//   // 3. if it is then remove the book
//     } else {
//       this.setState(state => {
//       // create an array without selected book
//         const userBookList = state.user[bookList].filter(book =>
//           book.id !== bookId)
//       // setting the updated userBookList array to the user[bookList] 
//         user[bookList] = userBookList;
//         return {
//           user
//         }
//       })
//     }
//   }
