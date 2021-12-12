import { TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { userState$ } from '../../../../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { strToNumber } from '../../../../../../constant';
import { updateBangDiemsStudent } from '../../../../../../redux/actions';

function ItemBangDiem({ MonHoc , indexMonHoc }) {

    const userState = useSelector(userState$);
    const dispatch = useDispatch();
    const [diemMonHoc, setDiemMonHoc] = useState({
        dD_Mieng: MonHoc.dD_Mieng,
        dD_15p: MonHoc.dD_15p,
        dD_1Tiet: MonHoc.dD_1Tiet,
        dD_HocKy: MonHoc.dD_HocKy,
    })

    const classes = useStyles();

    const handleDiemTB = () => {
        const { dD_Mieng, dD_15p, dD_1Tiet, dD_HocKy } = diemMonHoc;

        if(Number(dD_Mieng) > 0 && Number(dD_15p) > 0 && Number(dD_1Tiet) > 0 && Number(dD_HocKy) > 0) {
            const diemTB = (Number(dD_Mieng) + Number(dD_15p) + (Number(dD_1Tiet) * 2) + (Number(dD_HocKy) * 3)) / 7;
            return diemTB.toFixed(2);
        }
        return '';
    }
    
    const onChange = e => {
        const name = e.target.name;
        const value = strToNumber(e.target.value);
        setDiemMonHoc({
            ...diemMonHoc,
            [name]: value,
        });
    }

    const [checkDefaultValue, setCheckDefaultValue] = useState('');

    const onBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        if(value !== checkDefaultValue) {
            if(value.trim().length > 0) {
                dispatch(updateBangDiemsStudent({ mId: MonHoc.dID, mColumn: name, mValue: value}))
                setCheckDefaultValue('')
            }else {
                dispatch(updateBangDiemsStudent({ mId: MonHoc.dID, mColumn: name, mValue: '0'}))
                setCheckDefaultValue('')
            }
        }
    }

    const onFocus = e => {
        setCheckDefaultValue(e.target.value)
    }

    return (
        <TableRow className={indexMonHoc % 2 === 0 ? classes.backgroundRow : classes.backgroundRow1}>
            <TableCell component='th' scope='row'>
                {MonHoc.dTenMonHoc}
            </TableCell>

            <TableCell style={{paddingRight: 12}} align='right'>
                {
                    userState.mGV_PH ? 
                    <input 
                        onChange={onChange}
                        onFocus={onFocus} 
                        maxLength={4}
                        onBlur={onBlur}
                        name='dD_Mieng'
                        className={classes.input} 
                        type='text' 
                        value={diemMonHoc.dD_Mieng > 0 ? diemMonHoc.dD_Mieng : ''} 
                    /> : 
                    diemMonHoc.dD_Mieng > 0 ? diemMonHoc.dD_Mieng : ''
                }
                
            </TableCell>

            <TableCell style={{paddingRight: 12}} align='right'>
                {
                    userState.mGV_PH ? 
                    <input 
                        onChange={onChange}
                        onFocus={onFocus} 
                        maxLength={4}
                        onBlur={onBlur}
                        className={classes.input} 
                        type='text' 
                        name='dD_15p'
                        value={diemMonHoc.dD_15p > 0 ? diemMonHoc.dD_15p : ''} 
                    /> : 
                    diemMonHoc.dD_15p > 0 ? diemMonHoc.dD_15p : ''
                }
                
            </TableCell>

            <TableCell style={{paddingRight: 12}} align='right'>
                {
                    userState.mGV_PH ? 
                    <input 
                        onChange={onChange}
                        onFocus={onFocus} 
                        maxLength={4}
                        onBlur={onBlur}
                        className={classes.input} 
                        type='text' 
                        name='dD_1Tiet'
                        value={diemMonHoc.dD_1Tiet > 0 ? diemMonHoc.dD_1Tiet : ''} 
                    /> : 
                    diemMonHoc.dD_1Tiet > 0 ? diemMonHoc.dD_1Tiet : ''
                }
            </TableCell>

            <TableCell style={{paddingRight: 12}} align='right'>
                {
                    userState.mGV_PH ? 
                    <input 
                        onChange={onChange}
                        onFocus={onFocus} 
                        maxLength={4}
                        onBlur={onBlur}
                        className={classes.input} 
                        type='text' 
                        name='dD_HocKy'
                        value={diemMonHoc.dD_HocKy > 0 ? diemMonHoc.dD_HocKy : ''} 
                    /> : 
                    diemMonHoc.dD_HocKy > 0 ? diemMonHoc.dD_HocKy : ''
                }
            </TableCell>

            <TableCell style={{paddingRight: 12}} align='right'>{handleDiemTB()}</TableCell>
        </TableRow>
    )
}

export default ItemBangDiem;