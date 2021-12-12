import React, { useEffect, useState } from 'react';
import IconClose from '@material-ui/icons/Close';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { setToastMessage } from '../../redux/actions';

function Message({ title, message, classType, icon }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [checkRemove, setCheckRemove] = useState(0);
    useEffect(()=> {
        setTimeout(() => {
            setCheckRemove(1);
            dispatch(setToastMessage())
        }, 4000);
    }, [dispatch])
    return (
        checkRemove === 0 ? <div className={classes.toast + ' ' + classType}>
            <div className={classes.icon}>
                {icon}
            </div>

            <div className={classes.body}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.msg}>
                    {message.length < 40 ? message : message.slice(0, 40) + '...'}
                </p>
            </div>

            <div onClick={ () => setCheckRemove(1)} className={classes.close}>
                <IconClose  />
            </div>
        </div> : null
    )
}

export default Message;