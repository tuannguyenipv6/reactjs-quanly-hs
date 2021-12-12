import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { linkUrl } from '../../../../api';
import useStyles from '../../../Notyfi/ItemNotyfi/ModalEdittingTB/styles';
import { infodefaultState$, userState$ } from '../../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { hideModal, newToastMessage } from '../../../../redux/actions';
import { addDocument } from '../../../../firebase/services';

function ModalChatGVCN({ mMSL }) {

    const classes = useStyles();
    const infodefaultState = useSelector(infodefaultState$);
    const userState = useSelector(userState$);
    const dispatch = useDispatch();
    const [nameGVCN, setNameGVCN] = useState({
        checkUser: false,
        nameGVCN: '',
    })

    useEffect(() => {
        axios({
          method: 'POST',
          url: `${linkUrl}/user/name-gvcn`,
          data: { 
            mMSL,
          }
        }).then((response) => {
          if(response.data.key) {
            setNameGVCN({
                checkUser: true,
                nameGVCN: response.data.name,
            });
          }else {
            setNameGVCN({
                checkUser: false,
            })
          }
        }).catch((error) => {
          console.log(error);
        });
    }, [mMSL]); 

    const handleHuy = () => {
        dispatch(hideModal())
    }

    const handleCreateRooms = () => {
        addDocument('rooms', {
            mName: userState.taiKhoan,
            mMembers: [userState.taiKhoan, nameGVCN.nameGVCN]
        });
        dispatch(newToastMessage({
            title: 'Thông Tin!',
            message: 'Đã tạo.',
            type: 'info',
        }))
        dispatch(hideModal())
    }

    return (<>
        <div className={classes.modal}>
            <div className={classes.contenModal}>
                <span>{nameGVCN.checkUser ? 'Lớp:' : 'Thông tin:'}
                    <h3>{nameGVCN.checkUser ? infodefaultState.nameClass : 'Không tìm thấy GVCN ở MSL được thiếc lập ở TK này!'}</h3>
                </span>

                <Typography className={classes.conten}>
                    {nameGVCN.checkUser ? `Tạo phòng chát với GVCN: ${nameGVCN.nameGVCN}` : 'Vui lòng LH với GVCN để thiếc lập lại cài đặt MSL'}
                </Typography>

                <span style={{marginTop: 12}} className={classes.titleDate}>chát với giáo viên chủ nghiệm</span>
            </div>

            <div className={classes.button}>
                {
                    nameGVCN.checkUser ?
                    <>
                    <Button
                        variant='outlined' 
                        color='secondary' 
                        component='span'
                        style={{marginRight: 4}}
                        onClick={handleHuy}
                    >Hủy</Button>

                    <Button
                        variant='outlined' 
                        color='primary' 
                        component='span'
                        onClick={handleCreateRooms}
                    >Tạo</Button>
                    </>
                    :
                    <Button
                        variant='outlined' 
                        color='primary' 
                        component='span'
                        onClick={handleHuy}
                    >Trở lại</Button>
                }
            </div>
        </div>
    </>)
}

export default ModalChatGVCN;