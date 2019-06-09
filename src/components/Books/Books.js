import React from 'react';
import classes from './Books.module.scss';
import SearchBooks from './SearchBooks/SearchBooks';
import Read from './Read/Read';
import Wishlist from './Wishlist/Wishlist';
import Favourites from './Favourites/Favourites';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../../hoc/ErrorBoundry/ErrorBoundry';


const books = (props) => {
  const {changed, searchBook, booksData, isLoading, toggleBookHandler, isInUserState, userReadBooks, userWishlist, userFavourites, isInitial, openModalHandler } = props;
  const searchBooks = <SearchBooks 
                        isLoading={isLoading} 
                        changed={changed} 
                        searchBooks={searchBook} 
                        booksData={booksData} 
                        isInUserState={isInUserState} 
                        toggleBookHandler={toggleBookHandler}
                        isInitial={isInitial}
                        openModalHandler={openModalHandler}/>

  const readBooks = <Read 
                      userReadBooks={userReadBooks} 
                      isInUserState={isInUserState} 
                      toggleBookHandler={toggleBookHandler}
                      openModalHandler={openModalHandler}/>
  const wishlist = <Wishlist 
                      userWishlist={userWishlist} 
                      isInUserState={isInUserState} 
                      toggleBookHandler={toggleBookHandler}
                      openModalHandler={openModalHandler}/>
  const favourites = <Favourites 
                      userFavourites={userFavourites} 
                      isInUserState={isInUserState} 
                      toggleBookHandler={toggleBookHandler}
                      openModalHandler={openModalHandler}/>

  return (
    <div className={classes.Books} >  
     <ErrorBoundry>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/read"} render={() => readBooks}/>
        <Route path={process.env.PUBLIC_URL + "/wishlist"} render={() => wishlist}/>
        <Route path={process.env.PUBLIC_URL + "/favourites"} render={() => favourites}/>
        <Route path={process.env.PUBLIC_URL + "/"} exact render={() => searchBooks} />
        <Route render={() => <h1>Error 404</h1>} />
      </Switch>
     </ErrorBoundry>
    </div>
  )
}

export default books;