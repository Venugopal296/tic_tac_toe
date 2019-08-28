import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, ButtonGroup } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';

import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import ModalUI from '../../UI/Modal/Modal';
import GameField from '../../UI/GameField/GameField';
import FormDialogP1 from '../../UI/FormDialog/FormDialogP1';
import FormDialogP2 from '../../UI/FormDialog/FormDialogP2';

import classes from './MainContent.module.css';

const usestyles = makeStyles(theme => ({
    Paper: {
        padding: 10,
        margin: 10,
        height: '94%',
        background: 'rgba(0,0,0,.7)',
        boxShadow: '5px 5px 1px 0 rgba(0,0,0, .9)',
    },
    Button: {
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(99,5,2,0.8687850140056023) 100%)',
        fontWeight: 'bold',
        color: '#fafafa',
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    lsftIcon: {
        marginRight: theme.spacing(1),
    },
}));

const mainContent = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openP1, setOpenP1] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openP2, setOpenP2] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');

    const classesStyle = usestyles();

    function handleClickOpenP1() {
        setOpenP1(true);
    }

    function handleClickCloseP1() {
        setOpenP1(false);
    }

    function handleClickOpenP2() {
        setOpenP2(true);
    }

    function handleClickCloseP2() {
        setOpenP2(false);
    }

    const handleUpdate = (playerName) => {
        if (name !== '') {
            props.onNameUpdate(playerName, name)
        }
        handleClickCloseP1();
        handleClickCloseP2();
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div className={classes.MainContent}>
            <Grid container spacing={2} className={classes.GridGroup}>
                <Grid item xs={3}>
                    <Paper className={classesStyle.Paper}>
                        <ButtonGroup variant="contained">
                            <Button
                                variant="contained"
                                disabled={!props.player1}
                                className={classesStyle.Button}
                            >
                                <FaceIcon className={classes.rightIcon} />
                                {props.player1Name}
                            </Button>
                            <Button
                                disabled={props.gameStarted}
                                className={classesStyle.Button}
                            >
                                <EditIcon className={classes.lefttIcon} onClick={handleClickOpenP1} />
                                <FormDialogP1
                                    open={openP1}
                                    player={props.player1Name}
                                    onClose={handleClickCloseP1}
                                    onUpdate={() => handleUpdate('player1')}
                                    onChangeName={handleChange}
                                />
                            </Button>
                        </ButtonGroup>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <GameField />
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classesStyle.Paper}>
                        <ButtonGroup variant="contained">
                            <Button
                                variant="contained"
                                disabled={!props.player2}
                                className={classesStyle.Button}
                            >
                                <FaceIcon className={classes.rightIcon} />
                                {props.player2Name}
                            </Button>
                            <Button
                                disabled={props.gameStarted}
                                className={classesStyle.Button}
                            >
                                <EditIcon className={classes.lefttIcon} onClick={handleClickOpenP2} />
                                <FormDialogP2
                                    open={openP2}
                                    player={props.player2Name}
                                    onClose={handleClickCloseP2}
                                    onUpdate={() => handleUpdate('player2')}
                                    onChangeName={handleChange}
                                />
                            </Button>
                        </ButtonGroup>
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
        gameStarted: state.gameStarted,
        player1: state.player1Active,
        player2: state.player2Active,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onButtonClick: (value) => dispatch(actionCreators.buttonClicked(value)),
        onResetClick: () => dispatch(actionCreators.resetClicked()),
        onNameUpdate: (player, name) => dispatch(actionCreators.nameUpdate(player, name)),
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(mainContent);