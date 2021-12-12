import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfodefault, updateStudent1, upLoadImg } from '../../redux/actions';
import useStyles from './styles';
import { userState$ } from '../../redux/selectors';

// [checkKey] 1: tên lớp, 2: ảnh đại diện, 3: name GVCN, 4: Gmail, 5: sdt
// 6 set Link fb hs, dColumn: id student
function EditClassName({ checkKey, title, dColumn }) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [valueFile, setValueFile] = useState(null);

    const userState = useSelector(userState$);

    const onChange = e => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        if (checkKey === 2) {// ảnh đại diện
            if(valueFile) {
                let formData = new FormData(); 
                formData.append('myFile', valueFile);
                const data = {
                    formData,
                    data: {
                        mMSL: userState.mMSL,
                        mColumn: dColumn,
                    }
                }
                dispatch(upLoadImg(data));
            }
        }else {
            if(value.trim()) {
                if (checkKey === 6) {
                    // Set Link fb hs, dColumn: id student
                    const data = {
                        mID: dColumn, //dColumn là id
                        mColumn: 'dLinkfb',
                        mValue: value, 
                    };
                    dispatch(updateStudent1.updateStudentRequest(data));
                }else {
                    // Set thông tin GVCN
                    const data = {
                        mMSL: userState.mMSL,
                        mColumn: dColumn,
                        mValue: value,
                    };
                    dispatch(setInfodefault.setInfodefaultRequest(data));
                }
            }
        }
        
    }

    const onChangeFile = e => {
        setValueFile(e.target.files[0]);
    }

    const renderToTheCheckKey = () => {
        let result = null;
        if (checkKey === 2) {
            result = (<>
                <h3 className={classes.title}>Chọn hình ảnh: </h3>
                <TextField
                    className={classes.textField} 
                    type="file"
                    onChange={onChangeFile}
                />
                <Button 
                    variant='contained' 
                    color='primary' 
                    component='span' 
                    fullWidth
                    onClick={handleClick}
                >Thay đổi</Button>
            </>)
        }else {
            result = (<>
                <h3 className={classes.title}>Nhập nội dung: </h3>
                <TextField 
                    className={classes.textField} 
                    fullWidth 
                    size='small' 
                    id="outlined-basic" 
                    label={ title } 
                    variant="outlined"
                    onChange={onChange}
                />
                <Button 
                    variant='contained' 
                    color='primary' 
                    component='span' 
                    fullWidth
                    onClick={handleClick}
                >Thay đổi</Button>
            </>)
        }

        return result;
    }

    return (<div className={classes.wrapper}>
        { renderToTheCheckKey() }
    </div>);
}

export default EditClassName;