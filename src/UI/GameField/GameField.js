import React, { Fragment } from 'react';
import { Paper, Button, ButtonGroup } from '@material-ui/core';
import { connect } from 'react-redux';

import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import classes from './GameField.module.css';

const gameField = (props) => {

    const onButtonClicked = (value) => {
        props.onButtonClick(value);
    }

    return (
        <Fragment>
            <Paper className={classes.Paper}>
                <div className={classes.ButtonGrp}>
                    <ButtonGroup
                        fullWidth
                        aria-label="outlined primary button group"
                        disabled={!props.gameStarted}>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(1)}
                            disabled={props.totalArr[1]}>
                            1
                        </Button>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(2)}
                            disabled={props.totalArr[2]}>
                            2
                        </Button>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(3)}
                            disabled={props.totalArr[3]}>
                            3
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        fullWidth
                        aria-label="outlined primary button group"
                        disabled={!props.gameStarted}>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(4)}
                            disabled={props.totalArr[4]}>
                            4
                        </Button>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(5)}
                            disabled={props.totalArr[5]}>
                            5
                        </Button>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(6)}
                            disabled={props.totalArr[6]}>
                            6
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        fullWidth
                        aria-label="outlined primary button group"
                        disabled={!props.gameStarted}>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(7)}
                            disabled={props.totalArr[7]}>
                            7
                        </Button>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(8)}
                            disabled={props.totalArr[8]}>
                            8
                        </Button>
                        <Button
                            className={classes.Button}
                            onClick={() => onButtonClicked(9)}
                            disabled={props.totalArr[9]}>
                            9
                        </Button>
                    </ButtonGroup>
                </div>
            </Paper>
        </Fragment>
    );
}

const mapStatetoProps = (state) => {
    return {
        gameStarted: state.gameStarted,
        totalArr: state.selectedValues
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onButtonClick: (value) => dispatch(actionCreators.buttonClicked(value))
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(gameField);