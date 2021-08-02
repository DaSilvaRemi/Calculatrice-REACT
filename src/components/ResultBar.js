import React from "react";
import TextField from '@material-ui/core/TextField';

export default function ResultBar({ calcState = { result: 0, x: '', y: '', symbol: '', currentNumber: 'x', memAction: '' } }) {
    const val = calcState.x && calcState.y ? calcState.result : calcState.x + calcState.symbol + calcState.y;

    return <React.Fragment>
        <TextField disabled id="filled-disabled" label="Result" value={val} variant="filled" />
    </React.Fragment>
}