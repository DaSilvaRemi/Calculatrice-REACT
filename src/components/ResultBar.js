import React from "react";
import TextField from '@material-ui/core/TextField';

export default function ResultBar({ calcState }) {
    const val = calcState.result === null ? calcState.x + calcState.symbol + calcState.y : calcState.result;
    return <React.Fragment>
        <TextField disabled id="filled-disabled" label="Result" value={val} variant="filled" />
    </React.Fragment>
}