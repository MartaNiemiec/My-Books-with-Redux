import React from 'react';
import classes from './Books.module.scss';
import SearchBooks from './SearchBooks/SearchBooks';
import Read from './Read/Read'
import Wishlist from './Wishlist/Wishlist'
import Favourites from './Favourites/Favourites'
import { Route, Switch } from 'react-router-dom';


const books = (props) => {
  const {changed, searchBook, booksData, isLoading, toggleBookHandler, isInUserState, userReadBooks, userWishlist, userFavourites, isInitial} = props;
  const searchBooks = <SearchBooks 
                        isLoading={isLoading} 
                        changed={changed} 
                        searchBooks={searchBook} 
                        booksData={booksData} 
                        isInUserState={isInUserState} 
                        toggleBookHandler={toggleBookHandler}
                        isInitial={isInitial}/>

  const readBooks = <Read 
                      userReadBooks={userReadBooks} 
                      booksData={booksData} 
                      isInUserState={isInUserState} 
                      toggleBookHandler={toggleBookHandler}/>
  const wishlist = <Wishlist 
                      userWishlist={userWishlist} 
                      isInUserState={isInUserState} 
                      toggleBookHandler={toggleBookHandler}/>
  const favourites = <Favourites 
                      userFavourites={userFavourites} 
                      isInUserState={isInUserState} 
                      toggleBookHandler={toggleBookHandler}/>

  return (
    <div className={classes.Books} >   
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/read"} render={() => readBooks}/>
        <Route path={process.env.PUBLIC_URL + "/wishlist"} render={() => wishlist}/>
        <Route path={process.env.PUBLIC_URL + "/favourites"} render={() => favourites}/>
        <Route path={process.env.PUBLIC_URL + "/"} exact render={() => searchBooks} />
        <Route render={() => <h1>Error 404</h1>} />
      </Switch>
    </div>
  )
}

export default books;