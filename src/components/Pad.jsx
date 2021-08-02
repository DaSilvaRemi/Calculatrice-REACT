import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const Icons = [
    [{ symbol: "A/C", operation: "A/C" }, { symbol: "+/-", operation: "changeSign" }, { symbol: "/", operation: "divide" }, { symbol: "Erase", operation: "erase" }],
    [{ symbol: "7", operation: "number" }, { symbol: "8", operation: "number" }, { symbol: "9", operation: "number" }, { symbol: "x", operation: "multiply" }],
    [{ symbol: "4", operation: "number" }, { symbol: "5", operation: "number" }, { symbol: "6", operation: "number" }, { symbol: "-", operation: "minus" }],
    [{ symbol: "1", operation: "number" }, { symbol: "2", operation: "number" }, { symbol: "3", operation: "number" }, { symbol: "+", operation: "add" }],
    [{ symbol: "0", operation: "number" }, { symbol: ".", operation: "point" }, { symbol: "exp", operation: "exp" }, { symbol: "=", operation: "equals" }],
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    orange: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#ff9100'
    },
}));


export default function Pad({ dispatcher }) {
    const classes = useStyles();

    function FormRow({ children }) {
        return (
            <React.Fragment>
                {children.map((element, k) => {
                    const classeCSS = (((k + 1) >= 4) && ((k + 1) % 2 === 0)) ? classes.orange : classes.paper;
                    return <Grid item xs={2} key={k}>
                        <Paper
                            className={classeCSS}
                            key={element.operation}
                            onClick={() => dispatcher({ type: element.operation, symbol: element.symbol })}
                        >
                            {element.symbol}
                        </Paper>
                    </Grid>
                })}
            </React.Fragment>
        );
    }

    return (<div className={classes.root}>
        <Grid container spacing={1}>
            {Icons.map((elements, k) => {
                return <Grid container item xs={12} spacing={3} key={k}>
                    <FormRow key={"row " + k}>{elements}</FormRow>
                </Grid>
            })}
        </Grid>
    </div>)
}