import { CHANGE_SEARCH_FIELD } from './constants';

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