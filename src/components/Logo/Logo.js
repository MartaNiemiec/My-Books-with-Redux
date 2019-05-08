import React from 'react';
import classes from './Logo.module.scss';
import styled from 'styled-components';
import { Book } from 'styled-icons/fa-solid/Book';


const logo = () => {
    const LogoBook = styled(Book)`
        width: 1.8rem;
        height: 1.8rem;
        color: #eee;
        `
    return (
        <div className={classes.Logo}>
            < LogoBook />
        </div>
        
    )
}


export default logo;