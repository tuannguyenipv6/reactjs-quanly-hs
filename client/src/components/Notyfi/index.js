import { Card, Fab } from '@material-ui/core';
import React, { useEffect } from 'react';
import useStyles from './styles';
import AddIcon from '@material-ui/icons/Add';
import { userState$, thongBao$ } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ItemNotyfi from './ItemNotyfi';
import { changeModalContent, changeModalTitle, getTB, showModal } from '../../redux/actions';
import AddAndSetting from './AddAndSetting';

function Notyfi() {
    
    const classes = useStyles();
    const userState = useSelector(userState$);
    const thongBao = useSelector(thongBao$);
    const dispatch = useDispatch();

    useEffect(() => {
        const { mMSL } = userState;
        if(mMSL) {
            dispatch(getTB.getTBRequest({ mMSL }))
        }
    }, [dispatch, userState]);

    const handleAddNotyfi = () => {
        dispatch(showModal());
        dispatch(changeModalTitle('Tạo 1 Thông Báo Mới.'));
        dispatch(changeModalContent(<AddAndSetting />));
    }

    return (<>
        <Card className={classes.card}>
            <div className={classes.root}>
                {
                    thongBao.listTB.map(thongBao => <ItemNotyfi key={thongBao.dID} thongBao={thongBao} />)
                }
            </div>
        </Card>
        {
            userState.mGV_PH ? 
            <Fab onClick={handleAddNotyfi} color='primary' aria-label='add' className={classes.fab}>
                <AddIcon />
            </Fab> : null
        }
    </>)
}

export default Notyfi;