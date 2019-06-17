import { CHANGE_SEARCH_FIELD } from '../actions/constants';
import  { updateObject } from '../utility';

const initialStateSearch = {
  searchField: ''
}

const changeSearchfield = (state, action) => {
  return updateObject( state, { searchField: action.payload } )
}

const reducer = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD: return changeSearchfield(state, action)
      // return Object.assign({}, state, { searchfield: action.payload })
    default: return state;
  }
}

export default reducer;