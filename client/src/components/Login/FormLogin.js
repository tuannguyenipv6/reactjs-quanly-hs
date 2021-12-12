import React, { useCallback, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { userState$ } from '../../redux/selectors';
import { useHistory } from 'react-router-dom';

function FormLogin() {

    const [user, setUser] = useState({
        taiKhoan: '',
        matKhau: '',
    });
    const dispatch = useDispatch();
    const loginState = useSelector(userState$);
    const history = useHistory();

    const onChange = (event) => {
        const name = event.target.name;
        const value = name === 'matKhau' ? Number(event.target.value) : event.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    useEffect(() => {
        if(loginState.checkLogin) {
            history.push('/');
        }
    }, [loginState, history])

    const onLogin = useCallback(() => {
        if(user.taiKhoan && user.matKhau) {
            dispatch(loginUser.loginUserRequest(user));
        }
    }, [user, dispatch]);

    return (
        <form id='form-1'>
            <div className='form-control agileinfo'>	
                <input 
                    onChange={onChange} 
                    type='text' 
                    maxLength={13}
                    className='lock' 
                    name='taiKhoan' 
                    placeholder='Tài khoản'
                    id='password2'
                    required='' 
                />
            </div>

            <div className='form-control agileinfo'>	
                <input 
                    onChange={onChange} 
                    type='number'
                    style={{WebkitTextSecurity: 'disc'}}
                    className='lock' 
                    name='matKhau' 
                    placeholder='Mật khẩu'
                    id='password2'
                    required='' 
                />
            </div>		
            
            <div
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <Button 
                    variant='contained' 
                    color='primary' 
                    component='span' 
                    onClick={onLogin}
                    style={{margin: 8, padding: '6px 80px'}}
                >Đăng Nhập</Button>
            </div>
        </form>
    );
};

export default FormLogin;