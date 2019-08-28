import * as actionTypes from '../ActionTypes/ActionTypes';

const initiatState = {
    gameStarted: false,
    selectedValues: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
        '9': false
    },
    player1Active: false,
    player2Active: false,
    player1Name: 'Player 1',
    player2Name: 'Player 2',
    player1Array: [],
    player2Array: [],
    winner: null,
    gameOver: false
};

const winningValues = ['123', '456', '789', '147', '258', '369', '159', '357'];

const sets = (input, size) => {
    let results = [], result, mask, i, total = Math.pow(2, input.length);

    for (mask = size; mask < total; mask++) {
        result = [];
        i = input.length - 1;

        do {
            if ((mask & (1 << i)) !== 0) {
                result.push(input[i]);
            }
        } while (i--);

        if (result.length >= size) {
            if (result.length === 3) {
                result = result.sort((a, b) => a - b);
                result = result.join('');
                results.push(result);
            }
        }
    }
    return results;
};

const reducers = (state = initiatState, action) => {
    let player1 = false;
    let player2 = false;
    let hasOutput = false;
    let matchWinner = null;
    let player1Arr = [];
    let player2Arr = [];
    let combinationOutput = [];

    switch (action.type) {
        case actionTypes.START_CLICKED:
            const value = Math.random();

            if (value > 0.5) {
                player1 = true;
            } else {
                player2 = true;
            }

            return {
                ...state,
                gameStarted: true,
                player1Active: player1,
                player2Active: player2
            }

        case actionTypes.RESET_CLICKED:
            return {
                ...state,
                gameStarted: false,
                selectedValues: {
                    '1': false,
                    '2': false,
                    '3': false,
                    '4': false,
                    '5': false,
                    '6': false,
                    '7': false,
                    '8': false,
                    '9': false
                },
                player1Active: false,
                player2Active: false,
                player1Name: 'Player 1',
                player2Name: 'Player 2',
                player1Array: [],
                player2Array: [],
                winner: null,
                gameOver: false
            }

        case actionTypes.BUTTON_CLICKED:
            const oldState = { ...state };
            const oldslectedValues = { ...oldState.selectedValues };
            oldslectedValues[action.value] = true;

            player1 = oldState.player1Active;
            player2 = oldState.player2Active;
            player1Arr = [...oldState.player1Array];
            player2Arr = [...oldState.player2Array];

            if (player1) {
                player1Arr.push(action.value);
                if (player1Arr.length > 2) {
                    combinationOutput = sets(player1Arr, 3);
                }
            } else {
                player2Arr.push(action.value);
                if (player2Arr.length > 2) {
                    combinationOutput = sets(player2Arr, 3);
                }
            }
            for (let i = 0; i < combinationOutput.length; i++) {
                if (!hasOutput) {
                    hasOutput = winningValues.includes(combinationOutput[i]);
                }
            }

            if (hasOutput) {
                if (player1) {
                    matchWinner = state.player1Name
                } else {
                    matchWinner = state.player2Name
                }
            }

            return {
                ...state,
                selectedValues: oldslectedValues,
                player1Active: !player1,
                player2Active: !player2,
                player1Array: player1Arr,
                player2Array: player2Arr,
                winner: matchWinner,
                gameOver: hasOutput
            }

            case actionTypes.NAME_UPDATE:
                let player1N = state.player1Name;
                let player2N = state.player2Name;
                if(action.player === 'player1') {
                    player1N = action.value
                } else {
                    player2N = action.value
                }

                return {
                    ...state,
                    player1Name: player1N,
                    player2Name: player2N
                }

        default:
            return state;
    }
}

export default reducers;