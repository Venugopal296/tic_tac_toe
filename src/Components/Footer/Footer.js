import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const usestyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    footer: {
        background: 'rgba(0,0,0,.8)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 5px 5px 0 rgba(0,0,0, .9)',
        color: 'white',
        padding: '0 30px',
      }
}));


const Footer = (props) => {
    const classes = usestyles();
    return (
        <div>
            <AppBar position="static" className={classes.footer}>
                <Toolbar>
                    <Typography variant="caption" className={classes.title}>
                        @Copy rights
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Footer;