import { Avatar } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import IconAlternateEmail from '@material-ui/icons/AlternateEmail';
import IconCall from '@material-ui/icons/Call';
import { infodefaultState$ } from '../../redux/selectors';
import { useSelector } from 'react-redux';

function ContactGV() {

    const classes = useStyles();
    const infodefaultState = useSelector(infodefaultState$);
    const userState = useSelector(infodefaultState$);

    return (<>
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Giáo Viên Chủ Nghiệm:</h3>
            <div className={classes.header}>
                <Avatar src={infodefaultState.photo1 || infodefaultState.photo1 !== 'matdinh' ? infodefaultState.photo1 : null}>
                    {infodefaultState.photo1 || infodefaultState.photo1 !== 'matdinh' ? '' : userState.taiKhoan?.charAt(0).toUpperCase()}
                </Avatar>
                <h3>{ infodefaultState.name }</h3>
            </div>

            <div style={{padding: '4px 8px'}}>
                <div className={classes.wrapperInfo}>
                    <IconAlternateEmail />
                    <h3>: { infodefaultState.mail === 'MailGV@gmail.com' ? 'Chưa có' : infodefaultState.mail }</h3>
                </div>

                <div className={classes.wrapperInfo}>
                    <IconCall />
                    <h3>: { infodefaultState.phone === 'matdinh' ? 'Chưa có' : infodefaultState.phone }</h3>
                </div>
            </div>
        </div>
    </>)
}

export default ContactGV;