import { Modal } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { modalState$ } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../redux/actions';

function CommonModal() {

    const classes = useStyles();
    const modalState = useSelector(modalState$);
    const dispatch = useDispatch();

    const handleHideModal = () => {
        dispatch(hideModal());
    }
 
    return (
        <Modal open={modalState.showModal} onClose={handleHideModal} className={classes.modal}>
            <div className={classes.paper}>
                <div className={classes.header}>
                    <span className={classes.title}>{modalState.title}</span>
                    <div onClick={handleHideModal} className={classes.icon}>
                        <CloseIcon/>
                    </div>
                </div>
                
                <div className={classes.content}>
                    {/* Đây là Content */}
                    {modalState.component}
                </div>
            </div>
        </Modal>
    )
}

export default CommonModal;