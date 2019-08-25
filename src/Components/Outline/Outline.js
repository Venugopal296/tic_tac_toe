import React, { Fragment } from 'react';

import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

import classes from './Outline.module.css';


const outline = () => {
    return (
        <div className={classes.Outline}>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default outline;