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
    p1selectedValues: {
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
    p2selectedValues: {
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
    count: 0,
    player1Active: false,
    player2Active: false,
    player1Name: 'Player 1',
    player2Name: 'Player 2',
    player1Array: [],
    player2Array: [],
    player1Win: 0,
    player2Win: 0,
    draw: 0,
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
    let oldCount = 0;
    let player1Wins = 0;
    let player2Wins = 0;
    let drawn = 0;

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
                p1selectedValues: {
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
                p2selectedValues: {
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
                count:0,
                player1Active: false,
                player2Active: false,
                player1Array: [],
                player2Array: [],
                winner: null,
                gameOver: false
            }

        case actionTypes.BUTTON_CLICKED:
            const oldState = { ...state };
            const oldslectedValues = { ...oldState.selectedValues };
            const p1oldslectedValues = { ...oldState.p1selectedValues };
            const p2oldslectedValues = { ...oldState.p2selectedValues };
            oldslectedValues[action.value] = true;
            
            oldCount = oldState.count;
            oldCount = oldCount + 1;

            player1 = oldState.player1Active;
            player2 = oldState.player2Active;
            player1Arr = [...oldState.player1Array];
            player2Arr = [...oldState.player2Array];
            player1Wins = oldState.player1Win;
            player2Wins = oldState.player2Win;
            drawn = oldState.draw;

            if (player1) {
                p1oldslectedValues[action.value] = true;
                player1Arr.push(action.value);
                if (player1Arr.length > 2) {
                    combinationOutput = sets(player1Arr, 3);
                }
            } else {
                p2oldslectedValues[action.value] = true;
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
                    player1Wins = player1Wins + 1;
                } else {
                    matchWinner = state.player2Name
                    player2Wins = player2Wins + 1;
                }
            }

            if(oldCount === 9) {
                matchWinner = 'No one';
                hasOutput = true
                drawn = drawn + 1;
            }

            return {
                ...state,
                selectedValues: oldslectedValues,
                p1selectedValues: p1oldslectedValues,
                p2selectedValues: p2oldslectedValues,
                player1Active: !player1,
                player2Active: !player2,
                count: oldCount,
                player1Array: player1Arr,
                player2Array: player2Arr,
                player1Win: player1Wins,
                player2Win: player2Wins,
                draw: drawn,
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