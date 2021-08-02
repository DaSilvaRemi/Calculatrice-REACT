import Pad from "./Pad";
import ResultBar from "./ResultBar";
import Grid from '@material-ui/core/Grid';
import { useReducer } from "react";

const initialState = {
    result: null,
    x: '',
    y: '',
    symbol: '',
    currentNumber: 'x',
    memAction: ''
}

export default function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState);


    return <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5}>
        <Grid container item xs={12} spacing={3}>
            <ResultBar calcState={state}></ResultBar>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Pad dispatcher={dispatch}></Pad>
        </Grid>
    </Grid>
}

function reducer(state, action) {
    console.log(state);
    switch (action.type) {
        case 'add':
            return { ...state, memAction: 'add', currentNumber: 'y', symbol: action.symbol};
        case 'minus':
            return { ...state, memAction: 'minus', currentNumber: 'y', symbol: action.symbol};
        case 'multiply':
            return { ...state, memAction: 'multiply', currentNumber: 'y', symbol: action.symbol };
        case 'divide':
            return { ...state, memAction: 'divide', currentNumber: 'y', symbol: action.symbol };
        case 'exp':
            return { ...state, memAction: 'exp', currentNumber: 'y', symbol: action.symbol };
        case 'point':
            if(state[state.currentNumber].indexOf(".") === -1){
                return {...state, [state.currentNumber]: [state.currentNumber] + "."};
            }
            return state;
        case 'changeSign':
            return { ...state, [state.currentNumber]: state[state.currentNumber] * -1 };
        case 'equals':
            return {
                result: calculate({ x: state.x !== '' ? state.x : 0, y: state.y !== '' ? state.y : 0 }, state.memAction),
                x: '',
                y: '',
                symbol: '',
                currentNumber: 'x',
                memAction: ''
            }
        case 'number':
            return { ...state, [state.currentNumber]: state[state.currentNumber] + action.symbol };
        case 'erase':
            return {...state, [state.currentNumber]: ''};
        case 'A/C':
            return initialState;
        default:
            throw new Error("Action inconnu de type : " + action.type + ". Détail de l'action : " + action);
    }
}

function calculate(numbers, action) {
    const x = parseFloat(numbers.x, 10), y = parseFloat(numbers.y, 10);
    switch (action) {
        case 'add':
            return x + y;
        case 'minus':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            if (y === 0) {
                alert("Division par zéro");
                return 0;
            }
            return x / y;
        case 'exp':
            const pow = Math.pow(x, y);
            if (isNaN(pow)) {
                alert("Puissance incorrect ! ");
                return 0;
            }
            return pow;
        default:
            return 0;
    }
}