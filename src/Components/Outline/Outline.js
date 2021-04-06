import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
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