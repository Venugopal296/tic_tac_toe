import { Fade, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Redux/ActionCreators/ActionCreators';
import classesModal from './Modal.module.css';


const usestyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 400,
        background: 'rgba(0,0,0,.8)',
        boxShadow: '10px 10px 5px 0 rgba(0,0,0, .9)',
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
        outline: 0
    },
}));

const ModalCustom = (props) => {
    const classes = usestyles();

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
                className={classes.modal}
            >
                <Fade in={props.gameOver}>
                    <div className={classes.paper}>
                        <h2 id="simple-modal-title" className={classesModal.header}>Game Over</h2>
                        <p id="simple-modal-description" className={classesModal.para}>
                            Winner is: {props.winner}
                        </p>
                    </div>
                </Fade>
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

export default connect(mapStatetoProps, mapDipatchtoProps)(ModalCustom);