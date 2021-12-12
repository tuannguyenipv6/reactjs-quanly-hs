import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Message({ userLogin, mes, photo1, taiKhoan, userGVPH }) {
    const classes = useStyles();

    return (<>
        {
            userLogin !== userGVPH
            ? 
            <div className={classes.wrapperMessageLeft}>
                <div className={classes.wrapperAvatar}>
                    <Avatar
                        src={userGVPH ? photo1 : null}
                        className={classes.small}
                    >{!userGVPH ? taiKhoan.slice(0, 1).toUpperCase() : ''}</Avatar>
                </div>
                <Typography style={{marginLeft: 4}} className={classes.conten}>{mes}</Typography>
            </div> 
            :
            <div className={classes.wrapperMessageRight}>
                <Typography style={{marginRight: 4}} className={classes.contenRight}>{mes}</Typography>
                <div className={classes.wrapperAvatar}>
                    <Avatar
                        src={userGVPH ? photo1 : null}
                        className={classes.small}
                    >{!userGVPH ? taiKhoan.slice(0, 1).toUpperCase() : ''}</Avatar>
                </div>
            </div>
        }
    </>)
}

export default Message;