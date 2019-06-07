import React from 'react';
import classes from './PurchaseButton.module.scss';

const purchaseButton = (props) => {
  const book = props.book.saleInfo;
  const bookSaleability = book.saleability;
  let buttonClassName, buttonContent, link, listPrice, retailPrice;

  if (bookSaleability === "FREE") {
    buttonClassName = "Button__forFree";
    buttonContent = "FREE E-Book";
    link = book.buyLink;
  } else if (bookSaleability === "FOR_SALE") {
    buttonClassName = "Button__forSale";
    retailPrice = book.retailPrice.amount + ' ' + book.retailPrice.currencyCode;
    listPrice = book.listPrice.amount + ' ' + book.listPrice.currencyCode;
    link = book.buyLink;
    buttonContent = <div style={{display: "flex", alignItems: "center"}}>
                      <span>BUY</span>
                      <div className={classes.Button__prices}>
                        <span className={classes.Button__listPrice}>{listPrice}</span>
                        <span className={classes.Button__retailPrice}>{retailPrice}</span>
                      </div>
                    </div>
  } else if (bookSaleability === "NOT_FOR_SALE") {
    buttonClassName = "Button__notForSale"
    buttonContent = "NOT FOR SALE";
    link = "";
  }

  return (
    <button className={classes[buttonClassName] + " " + classes.Button}>
      <a target="_blank" 
        rel="noopener noreferrer"
        href={link} 
        title="Buy in Google Play" 
        className={classes.Button__link}>{buttonContent}</a> 
    </button>
  )
}


export default purchaseButton;