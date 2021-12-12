import { Button, TextareaAutosize, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { userState$ } from '../../../redux/selectors';
import { addTB, updateTB } from '../../../redux/actions';

function AddAndSetting({ mThongBao }) {

    const fotmatDate = (date) => {
        const mNam = date.getFullYear();       
        const mThang = date.getMonth() + 1;        
        const mNgay = date.getDate();           
        const mGio = date.getHours();        
        const mPhut = date.getMinutes();
        let day_name = ''; 
        switch (date.getDay()) {
            case 0:
                day_name = "CN";
                break;
            case 1:
                day_name = "T2";
                break;
            case 2:
                day_name = "T3";
                break;
            case 3:
                day_name = "T4";
                break;
            case 4:
                day_name = "T5";
                break;
            case 5:
                day_name = "T6";
                break;
            case 6:
                day_name = "T7";
                break;
            default: return day_name = '';
        }       
        return `${day_name}, ${mGio}:${mPhut}, ${mNgay}/${mThang}/${mNam}`;
    }

    const classes = useStyles();
    const dispatch = useDispatch();
    const userState = useSelector(userState$);
    const [thongBao, setThongBao] = useState({
        dMSL: userState.mMSL ? userState.mMSL : -1,
        dNgayDang: fotmatDate(new Date()),
        dGV_Truong: 'Giáo Viên',
        dTenTB: '',
        dNoiDungTB: '',
    });

    useEffect(() => {
        if(mThongBao) {
            setThongBao(mThongBao);
        }
    }, [mThongBao])

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setThongBao({
            ...thongBao,
            [name]: value,
        });
    }
    
    const onSubmit = () => {
        if (thongBao.dTenTB && thongBao.dNoiDungTB) {
            if(mThongBao) {
                dispatch(updateTB.updateTBRequest(thongBao));
            }else {
                dispatch(addTB.addTBRequest(thongBao));
            }
        }
    }

    return (
        <div className={classes.modal}>
            <div className={classes.wrapperTitle}>
                <span className={classes.spanTitle}>Thông báo từ:</span>
                <Button 
                    variant='outlined' 
                    color={thongBao.dGV_Truong === 'Giáo Viên' ? 'secondary' : 'default'}
                    size='small'
                    style={{marginRight: 4}}
                    onClick={() => setThongBao({...thongBao, dGV_Truong: 'Giáo Viên'})}
                >
                    Giáo Viên
                </Button>

                <Button 
                    size='small'
                    variant='outlined' 
                    color={thongBao.dGV_Truong === 'Nhà Trường' ? 'secondary' : 'default'}
                    onClick={() => setThongBao({...thongBao, dGV_Truong: 'Nhà Trường'})}
                >Nhà Trường</Button>
            </div>

            <span className={classes.spanDate}>{thongBao.dNgayDang}</span>

            <div className={classes.textFieldTitle}>
                <span style={{color: '#3F51B5'}}>Tên Thông Báo: </span>
                <TextField
                    value={thongBao.dTenTB}
                    onChange={onChange}
                    name='dTenTB'
                    className={classes.txtTenTB}
                    variant="standard"
                />
            </div>

            <div className={classes.textFieldConten}>
                <span style={{color: '#3F51B5', marginBottom: 8}}>Nội dung: </span>
                <TextareaAutosize 
                    value={thongBao.dNoiDungTB}
                    onChange={onChange}
                    name='dNoiDungTB'
                    className={classes.txtconten}
                    aria-label="empty textarea" 
                    placeholder="Aa..." 
                />
            </div>

            <Button 
                variant='contained' 
                color='primary'
                size='medium'
                style={{alignSelf: 'flex-end', margin: '0 24px 8px 0'}}
                onClick={onSubmit}
            >
                {
                    mThongBao ? 'Thay đổi': 'Thêm'
                }
            </Button>
        </div>
    )
}

export default AddAndSetting;