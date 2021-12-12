import { Card, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import useStyles from './styles';
import { userState$, tkb$ } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getTKB } from '../../redux/actions';
import ItemTKB from './ItemTKB/index';

function Timetable() {

    const classes = useStyles();
    const userState = useSelector(userState$);
    const arrTKB = useSelector(tkb$);
    const dispatch = useDispatch();

    useEffect(() => {
        if(userState.mMSL) {
            const { mMSL } = userState;
            dispatch(getTKB.getTKBRequest({ mMSL }))
        }
    }, [dispatch, userState]);

    return (
        <Card className={classes.card}>
            <Grid container>
                {
                    arrTKB.listTKB.map((tkb, index) => <ItemTKB key={index} tkb={tkb}/>)
                }
            </Grid>
        </Card>
    )
}

export default Timetable;