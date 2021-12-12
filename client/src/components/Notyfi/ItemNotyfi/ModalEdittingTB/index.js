import { Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deleteTB, changeModalContent } from '../../../../redux/actions';
import AddAndSetting from '../../AddAndSetting';

function ModalEdittingTB({ thongBao }) {
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const onClickDelete = () => {
        const { dID } = thongBao;
        dispatch(deleteTB.deleteTBRequest({ dID }))
    }

    const onClickUpdate = () => {
        dispatch(changeModalContent(<AddAndSetting mThongBao={thongBao} />))
    }

    return (
    <div className={classes.modal}>
        <div className={classes.contenModal}>
            <span>Thông báo từ:
                <h3>{thongBao.dGV_Truong}</h3>
            </span>

            <Typography className={classes.conten}>
                {thongBao.dTenTB}
            </Typography>

            <span className={classes.titleDate}>{thongBao.dNgayDang}</span>
        </div>

        <div className={classes.button}>
            <Button
                variant='outlined' 
                color='secondary' 
                component='span'
                style={{marginRight: 4}}
                onClick={onClickDelete}
            >Xóa</Button>

            <Button
                variant='outlined' 
                color='primary' 
                component='span'
                onClick={onClickUpdate}
            >Sửa</Button>
        </div>
    </div>
    )
}

export default ModalEdittingTB;