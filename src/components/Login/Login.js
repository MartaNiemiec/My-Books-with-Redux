import React from 'react';
import classes from './Login.module.scss';
import { MyUser } from '../../components/UI/Icons/LoginIcon';


const login = () => (
    <div className={classes.Login}>
        < MyUser />
    </div>
)

export default login;