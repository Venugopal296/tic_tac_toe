import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';

import classesStyle from './Header.module.css';

const usestyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    }
}));


const header = (props) => {
    const classes = usestyles();
    return (
        <Fragment>
            <AppBar color="primary" position="static" className={classesStyle.Header}>
                <Toolbar>
                    <Typography variant="caption" color="inherit">
                        TicTacToe
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Tic Tac Toe
                    </Typography>
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.button}
                        disabled={props.gameStarted}
                        onClick={props.onStartClick}>
                        Start
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.button}
                        disabled={!props.gameStarted}
                        onClick={props.onResetClick}>
                        Reset
                    </Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

const mapStatetoProps = (state) => {
    return {
        gameStarted: state.gameStarted
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onStartClick: () => dispatch(actionCreators.startClicked()),
        onResetClick: () => dispatch(actionCreators.resetClicked()),
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(header);