import * as actionTypes from '../ActionTypes/ActionTypes';

export const startClicked = () => {
    return {
        type: actionTypes.START_CLICKED
    };
};

export const resetClicked = () => {
    return {
        type: actionTypes.RESET_CLICKED
    };
};

export const buttonClicked = (value) => {
    return {
        type: actionTypes.BUTTON_CLICKED,
        value: value
    };
};

export const nameUpdate = (player, value) => {
    return {
        type: actionTypes.NAME_UPDATE,
        player: player,
        value: value
    };
};