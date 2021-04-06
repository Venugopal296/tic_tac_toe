import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Panda from '../../Assets/Images/—Pngtree—panda xiong bao baby hand-painted_3860457.png';
import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';


const usestyles = makeStyles(theme => ({
    header: {
        background: 'rgba(0,0,0,.4)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 5px 5px 0 rgba(0,0,0, .9)',
        color: 'white',
        padding: 0,
    },
    brand: {
        // flexGrow: 1
    },
    bigAvatar: {
        padding: 5,
        width: 60,
        height: 60,
    },
    title: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(1),
        fontWeight: 900,
        background: 'radial-gradient(circle, rgba(241,141,9,0.8687850140056023) 28%, rgba(32,28,23,1) 100%)',

    },
}));

const Header = (props) => {
    const classes = usestyles();
    return (
        <Fragment>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Avatar src={Panda} alt="Panda" className={classes.bigAvatar} />
                    <Typography variant="h4" className={classes.title}>
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

export default connect(mapStatetoProps, mapDipatchtoProps)(Header);