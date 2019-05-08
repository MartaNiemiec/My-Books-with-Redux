import React from 'react';
import classes from './Logo.module.scss';
import { LogoIcon } from '../../components/UI/Icons/LogoIcon'

const logo = () => (
    <div className={classes.Logo}>
        < LogoIcon />
    </div>  
)

export default logo;