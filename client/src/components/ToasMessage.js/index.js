import useStyles from './styles';
import React from 'react';
import Message from './Message';
import IconCheckCircle from '@material-ui/icons/CheckCircle';
import IconInfo from '@material-ui/icons/Info';
import IconWarning from '@material-ui/icons/Warning';
import IconPriorityHigh from '@material-ui/icons/PriorityHigh';
import { toastState$ } from '../../redux/selectors';
import { useSelector } from 'react-redux';

function ToastMessage() {
    const classes = useStyles();

    const toastMessage = useSelector(toastState$);

    const rederMessage = () => {
        if(toastMessage.title && toastMessage.message) {
            if(toastMessage.type === 'success') {
                return <Message
                    icon={<IconCheckCircle />} 
                    toastMessage={toastMessage} 
                    title={toastMessage.title} 
                    message={toastMessage.message} 
                    classType={classes.toast__success_icon} 
                />;
            }else if (toastMessage.type === 'info') {
                return <Message
                    icon={<IconInfo />} 
                    toastMessage={toastMessage} 
                    title={toastMessage.title} 
                    message={toastMessage.message} 
                    classType={classes.toast__info_icon} 
                />;
            }else if (toastMessage.type === 'error') {
                return <Message
                    icon={<IconPriorityHigh />} 
                    toastMessage={toastMessage} 
                    title={toastMessage.title} 
                    message={toastMessage.message} 
                    classType={classes.toast__error_icon}
                />;
            }else {
                return <Message
                    icon={<IconWarning />} 
                    toastMessage={toastMessage} 
                    title={toastMessage.title}  
                    message={toastMessage.message} 
                    classType={classes.toast__wrning_icon} 
                />;
            }
        }else return;
    }

    return (<div className={classes.wrapper}>
        {rederMessage()}
    </div>);
}

export default ToastMessage;

/**
 success
 info
 wrning
 error
*/