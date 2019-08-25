import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import ModalUI from '../../UI/Modal/Modal';
import GameField from '../../UI/GameField/GameField';

import classes from './MainContent.module.css';

const mainContent = (props) => {

    return (
        <div className={classes.MainContent}>
            <Grid container spacing={2} className={classes.GridGroup}>
                <Grid item xs={3} >
                    <Paper className={classes.Paper}>
                        <Button fullWidth variant="contained" color="primary" disabled={!props.player1}>PLAYER 1</Button>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <GameField />
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.Paper}>
                        <Button fullWidth variant="contained" color="primary" disabled={!props.player2}>PLAYER 2</Button>
                    </Paper>
                </Grid>
            </Grid>
            <div>
                <ModalUI />
            </div>
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        player1: state.player1Active,
        player2: state.player2Active
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onButtonClick: (value) => dispatch(actionCreators.buttonClicked(value)),
        onResetClick: () => dispatch(actionCreators.resetClicked()),
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(mainContent);