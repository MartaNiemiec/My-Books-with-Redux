import React from 'react';
import classes from './Books.module.scss';
import SearchBooks from './SearchBooks/SearchBooks';
import Read from './Read/Read'
import Wishlist from './Wishlist/Wishlist'
import Favourites from './Favourites/Favourites'
import { Route, Switch } from 'react-router-dom';


const books = (props) => {
  const {changed, searchBook, booksData, isLoading, toggleBookHandler, isInUserState} = props;
  const searchBooks = <SearchBooks 
                        isLoading={isLoading} 
                        changed={changed} 
                        searchBooks={searchBook} 
                        booksData={booksData} 
                        isInUserState={isInUserState} 
                        toggleBookHandler={toggleBookHandler}/>

  return (
    <div className={classes.Books} >   
      <Switch>
        <Route path="/read" component={Read}/>
        <Route path="/wishlist" component={Wishlist}/>
        <Route path="/favourites" component={Favourites}/>
        <Route path='/' exact render={() => searchBooks} />
        <Route render={() => <h1>Error 404</h1>} />
      </Switch>
    </div>
  )
}

export default books;