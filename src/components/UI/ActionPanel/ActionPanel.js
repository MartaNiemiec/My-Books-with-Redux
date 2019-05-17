import React from 'react';
import classes from './ActionPanel.module.scss';
import { GreyStar, OrangeFullStar } from '../Icons/StarIcon';
import { GreyList, GreenList } from '../Icons/ListIcon';
import { GreyCheck, YellowCheck } from '../Icons/CheckIcon';

const ActionPanel = (props) => {
  const { isInReadBooks, isInWishlist, isInFavourites, toggleWishlistBook, toggleFavouritesBook, toggleReadBook } = props;
  let checkIcon, listIcon, starIcon;

  isInReadBooks ? checkIcon = <YellowCheck /> : checkIcon = <GreyCheck />
  isInWishlist ? listIcon = <GreenList /> : listIcon = <GreyList />
  isInFavourites ? starIcon = <OrangeFullStar /> : starIcon = <GreyStar />


return (
  <div className={classes.ActionPanel}>
    <div onClick={toggleWishlistBook}>{listIcon}</div>
    <div onClick={toggleReadBook}>{checkIcon}</div>
    <div onClick={toggleFavouritesBook}>{starIcon}</div>
  </div> 
)
}

export default ActionPanel;