import React, { Fragment, useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import classesModal from './Modal.module.css';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const usestyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center'
    },
}));

const modal = (props) => {
    const classes = usestyles();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalStyle] = useState(getModalStyle);

    const handleClose = () => {
        props.onResetClick()
    };

    return (
        <Fragment>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.gameOver}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title" className={classesModal.header}>Game Over</h2>
                    <p id="simple-modal-description" className={classesModal.para}>
                        Winner is: {props.winner}
                    </p>
                </div>
            </Modal>
        </Fragment>
    );
}

const mapStatetoProps = (state) => {
    return {
        gameOver: state.gameOver,
        winner: state.winner
    }
}

const mapDipatchtoProps = (dispatch) => {
    return {
        onResetClick: () => dispatch(actionCreators.resetClicked()),
    }
}

export default connect(mapStatetoProps, mapDipatchtoProps)(modal);