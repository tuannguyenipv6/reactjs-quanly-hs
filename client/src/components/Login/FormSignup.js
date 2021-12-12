import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import { useDispatch, useSelector } from 'react-redux';
import { loginAccount, newUser, signUpAccountTitle } from '../../redux/actions';
import { loginState$ } from '../../redux/selectors';

function FormSignup() {
    const loginState = useSelector(loginState$);
    const [addNewUser, setAddNewUser] = useState({
        taiKhoan: '',
        matKhau: '',
        mMSL: '',
        mQMK: '',
        mGV_PH: 1,
    });
    const [formMessage, setFormMessage] = useState({
        taiKhoan: '',
        matKhau: '',
        mMSL: '',
        mQMK: '',
    })
    const dispatch = useDispatch();

    const onChange = useCallback((event) => {
        const name = event.target.name;
        setFormMessage({...formMessage, [name]: ''});
        const value = name === 'taiKhoan' ? event.target.value.trim() : Number(event.target.value.trim());
        setAddNewUser({
            ...addNewUser,
            [name]: value,
        });
    }, [formMessage, addNewUser])

    const onSubmit = useCallback(() => {
        if(addNewUser.taiKhoan && addNewUser.matKhau && addNewUser.mMSL && addNewUser.mQMK) {
            dispatch(newUser.newUserRequest(addNewUser));
        }else {
            setFormMessage({
                taiKhoan: addNewUser.taiKhoan.length === 0 ? 'Vui lòng nhập trường này!' : '',
                matKhau: addNewUser.matKhau === 0 || addNewUser.matKhau.length === 0 ? 'Vui lòng nhập trường này!' : '',
                mMSL: addNewUser.mMSL === 0 || addNewUser.mMSL.length === 0 ? 'Vui lòng nhập trường này!' : '',
                mQMK: addNewUser.mQMK === 0 || addNewUser.mQMK.length === 0 ? 'Vui lòng nhập trường này!' : '',
            })
        }
    }, [addNewUser, dispatch]);

    const onBlur = (e) => {
        const name = e.target.name;
        if (e.target.value.length === 0) {
            setFormMessage({...formMessage, [name]: 'Vui lòng nhập trường này!'})
        }
    }

    const onInput = (e) => {
        e.target.value = e.target.value.length >= 6 ? e.target.value.slice(0, 6) : e.target.value;
    }

    const onGV_PH = (key) => {
        if(key === 1) {
            dispatch(signUpAccountTitle({ title: 'Đăng ký tài khoản cho giáo viên' }));
        }else {
            dispatch(signUpAccountTitle({ title: 'Đăng ký tài khoản cho phụ huynh' }));
        }

        setAddNewUser({
            ...addNewUser,
            mGV_PH: key,
        });
    }

    return (
    <form>
        <div className="back_login">
            <ReplyIcon color='primary' onClick={() => dispatch(loginAccount())}/>
        </div>

        <div className="ph_gv">	
            <Button 
                variant="outlined" 
                color={addNewUser.mGV_PH === 1 ? 'secondary' : 'default'}
                onClick={() => onGV_PH(1)}
            >
                Giáo Viên
            </Button>
            <span className="ph_gv_spacing"></span>
            <Button 
                variant="outlined" 
                color={addNewUser.mGV_PH === 0 ? 'secondary' : 'default'}
                onClick={() => onGV_PH(0)}
            >Phụ Huynh</Button>
        </div>

        <div className="form-control agileinfo">	
            <input
                onBlur={onBlur}
                onChange={onChange} 
                type="text" 
                maxLength={13}
                className="lock" 
                name="taiKhoan" 
                placeholder="Tạo tên tài khoản" 
                id="password2" 
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.taiKhoan}</span>
            </div>
        </div>	

        <div className="form-control agileinfo">	
            <input
                onInput={onInput} 
                onBlur={onBlur}
                onChange={onChange} 
                type="number" pattern="[0-9]*" inputMode="numeric" min="1111" max="9999" 
                style={{WebkitTextSecurity: 'disc'}}
                className="lock" 
                name="matKhau" 
                placeholder="Tạo mật khẩu" 
                id="password2" 
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.matKhau}</span>
            </div>
        </div>

        <div className="form-control agileinfo">	
            <input
                onInput={onInput} 
                onBlur={onBlur}
                onChange={onChange} 
                type="number" 
                className="lock" 
                name="mMSL" 
                placeholder={loginState.mGV_PH === 1 ? 'Tạo mã lớp' : 'Nhập mã lớp'} 
                id="password2" 
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.mMSL}</span>
            </div>
        </div>

        <div className="form-control agileinfo">	
            <input
                onInput={onInput} 
                onBlur={onBlur}
                onChange={onChange} 
                type="number" 
                className="lock" 
                name="mQMK" 
                placeholder="Tạo mã tài khoản" 
                id="password2" 
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.mQMK}</span>
            </div>
        </div>	
    
        <div
            style={{display: 'flex', justifyContent: 'center'}}
        >
            <Button 
                variant='contained' 
                color='primary' 
                component='span' 
                onClick={onSubmit}
                style={{margin: 8, padding: '6px 80px'}}
            >Đăng ký</Button>
        </div>
    </form>)
}

export default FormSignup;