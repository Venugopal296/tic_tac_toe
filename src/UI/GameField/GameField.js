import { Button, ButtonGroup, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import classes from './GameField.module.css';


const usestyles = makeStyles(theme => ({
    Paper: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        height: '94%',
        background: 'rgba(0,0,0,.7)',
        boxShadow: '5px 5px 1px 0 rgba(0,0,0, .9)',
    },
    Button: {
        height: 120,
        color: '#ffffff',
        fontSize: 30
    },
    winPara: {
        color: '#ffffff',
        marginTop: 30,
        fontSize: 32
    }
}));

const GameField = (props) => {
    const classesStyle = usestyles();

    const onButtonClicked = (value) => {
        props.onButtonClick(value);
    }

    let gameArea = <div className={classes.startGame}>Start the Game</div>

    if (props.gameStarted) {
        gameArea = (
            <div className={classes.ButtonGrp}>
                <ButtonGroup
                    fullWidth
                    disabled={!props.gameStarted}>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(1)}
                        disabled={props.totalArr[1]}
                        style={{ border: props.totalArr[1] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[1] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[1] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(2)}
                        disabled={props.totalArr[2]}
                        style={{ border: props.totalArr[2] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[2] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[2] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(3)}
                        disabled={props.totalArr[3]}
                        style={{ border: props.totalArr[3] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[3] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[3] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                </ButtonGroup>

                <ButtonGroup
                    fullWidth
                    aria-label="outlined primary button group"
                    disabled={!props.gameStarted}>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(4)}
                        disabled={props.totalArr[4]}
                        style={{ border: props.totalArr[4] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[4] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[4] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(5)}
                        disabled={props.totalArr[5]}
                        style={{ border: props.totalArr[5] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[5] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[5] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(6)}
                        disabled={props.totalArr[6]}
                        style={{ border: props.totalArr[6] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[6] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[6] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                </ButtonGroup>

                <ButtonGroup
                    fullWidth
                    aria-label="outlined primary button group"
                    disabled={!props.gameStarted}>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(7)}
                        disabled={props.totalArr[7]}
                        style={{ border: props.totalArr[7] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[7] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[7] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(8)}
                        disabled={props.totalArr[8]}
                        style={{ border: props.totalArr[8] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[8] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[8] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                    <Button
                        className={classesStyle.Button}
                        onClick={() => onButtonClicked(9)}
                        disabled={props.totalArr[9]}
                        style={{ border: props.totalArr[9] ? '2px solid #bdbdbd' : '2px solid #bdbdbd' }}
                    >
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p1Values[9] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            X
                            </p>
                        <p
                            style={{
                                color: '#ffffff',
                                display: props.p2Values[9] ? 'block' : 'none',
                                fontSize: 30
                            }}
                        >
                            O
                            </p>
                        </Button>
                </ButtonGroup>
            </div>
        )
    }

    return (
        <Fragment>
            <Paper className={classesStyle.Paper}>
                <div className={classes.gameBox}>
                    {gameArea}
                </div>
                <div>
                    <p className={classesStyle.winPara}>No Result: {props.draw}</p>
                </div>
            </Paper>
        </Fragment>
    );
}

const mapStatetoProps = (state) => {
    return {
        gameStarted: state.gameStarted,
        totalArr: state.selectedValues,
        p1Values: state.p1selectedValues,
        p2Values: state.p2selectedValues,
        draw: state.draw,
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onButtonClick: (value) => dispatch(actionCreators.buttonClicked(value))
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(GameField);