import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classesStyle from './Footer.module.css';

const usestyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    }
}));


const footer = (props) => {
    const classes = usestyles();
    return (
        <Fragment>
            <AppBar color="default" position="static" className={classesStyle.Footer}>
                <Toolbar>
                    <Typography variant="caption" className={classes.title}>
                        @Copy rights
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default footer;