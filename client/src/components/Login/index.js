import React from 'react';
import './style.css';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import ForgotPassword from './ForgoPassword';
import { loginState$ } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { forgetAccount, signUpAccount } from '../../redux/actions';
import { Hidden } from '@material-ui/core';

function Login() {
    // loginState.key: 1: đăng nhập, 2: tạo tk, 3: quên mk
    const loginState = useSelector(loginState$);
    const dispatch = useDispatch();

    const formLogins = () => {
        if(loginState.key === 1) {
            return <FormLogin />
        }else if (loginState.key === 2) {
            return <FormSignup />
        }else {
            return <ForgotPassword />
        }
    }

    return (<div style={{fontFamily: 'Raleway, sans-serif'}}>
        <h1 className="w3ls">{ loginState.title }</h1>
        <div className="content-w3ls">
            <div className="content-agile1">
                <h2 className="agileits1">Student</h2>
                <p className="agileits2">Chào mừng đến với phần mềm Quản lý học sinh by NQT.</p>
            </div>
            <div className="content-agile2">
                {
                    formLogins()
                }
                <p className="wthree w3l">
                    Hỗ trợ tài khoản ? 
                    <Hidden lgUp>
                        <br/>
                    </Hidden>
                    <span className="text_aria" onClick={() => dispatch(signUpAccount())}> Đăng ký </span>
                    |
                    <span className="text_aria" onClick={() => dispatch(forgetAccount())}> Quên mật khẩu</span>
                </p>
            </div>
            <div className="clear"></div>
        </div>
        <p className="copyright w3l">© 2021 Phần mềm quản lý học sinh | Design web by NQT <a href="https://www.facebook.com/NQT.TuanNguyen.ipv6">FB:NQT</a></p>
    </div>)
}

export default Login;