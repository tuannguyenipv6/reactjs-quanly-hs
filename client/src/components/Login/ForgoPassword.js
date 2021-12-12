import React, { useCallback, useState } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { forgoUser, loginAccount } from '../../redux/actions';

function ForgotPassword(){

    const [userForgo, setUserForgo] = useState({
        taiKhoan: '',
        qMatKhau: '',
        newMatKhau: '',
        matKhau2: '',
    });
    const dispatch = useDispatch();
    const [formMessage, setFormMessage] = useState({
        taiKhoan: '',
        qMatKhau: '',
        newMatKhau: '',
        matKhau2: '',
    })

    const onChange = (event) => {
        const name = event.target.name;
        setFormMessage({...formMessage, [name]: ''});
        const value = name === 'taiKhoan' ? event.target.value : Number(event.target.value);
        setUserForgo({
            ...userForgo,
            [name]: value,
        })
    }

    const onBlur = (e) => {
        const name = e.target.name;
        if (e.target.value.length === 0) {
            setFormMessage({...formMessage, [name]: 'Vui lòng nhập trường này!'})
        }else if (name === 'matKhau2') {
            if (Number(e.target.value) !== Number(userForgo.newMatKhau)) {
                setFormMessage({...formMessage, [name]: 'Mật khẩu xác nhận không chín xác!'})
            }
        }else if (name === 'newMatKhau') {
            if (Number(e.target.value) !== Number(userForgo.matKhau2)) {
                setFormMessage({...formMessage, matKhau2: 'Mật khẩu xác nhận không chín xác!'})
            }else setFormMessage({...formMessage, matKhau2: ''})
        }
    }

    const onInput = (e) => {
        e.target.value = e.target.value.length >= 6 ? e.target.value.slice(0, 6) : e.target.value;
    }

    const onSubmit = useCallback(() => {
        if(userForgo.taiKhoan && userForgo.qMatKhau && userForgo.newMatKhau && userForgo.matKhau2) {
            if(formMessage.matKhau2.length === 0) {
                dispatch(forgoUser.forgoUserRequest(userForgo));
            }
        }else {
            setFormMessage({
                taiKhoan: userForgo.taiKhoan.length === 0 ? 'Vui lòng nhập trường này!' : '',
                qMatKhau: userForgo.qMatKhau === 0 || userForgo.qMatKhau.length === 0 ? 'Vui lòng nhập trường này!' : '',
                newMatKhau: userForgo.newMatKhau === 0 || userForgo.newMatKhau.length === 0 ? 'Vui lòng nhập trường này!' : '',
                matKhau2: userForgo.matKhau2 === 0 || userForgo.matKhau2.length === 0 ? 'Vui lòng nhập trường này!' : '',
            })
        }
    }, [userForgo, dispatch, formMessage])

    return (<form>
        <div className="back_login">
            <ReplyIcon color='primary' onClick={() => dispatch(loginAccount())}/>
        </div>
        
        <div className="form-control agileinfo">	
            <input
                onBlur={onBlur} 
                onChange={onChange} 
                type="text" 
                maxLength={13}
                className="lock" 
                name="taiKhoan" 
                placeholder="Nhập tên tài khoản" 
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
                type="number" 
                className="lock" 
                name="qMatKhau" 
                placeholder="Nhập mã tài khoản" 
                id="password2" 
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.qMatKhau}</span>
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
                name="newMatKhau" 
                placeholder="Nhập mật khẩu mới" 
                id="password2" 
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.newMatKhau}</span>
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
                name="matKhau2" 
                placeholder="Nhập lại mật khẩu mới" 
                id="password2"
                required="" 
            />
            <div className='form-message'>
                <span>{formMessage.matKhau2}</span>
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
            >Xác nhận</Button>
        </div>
    </form>)
}

export default ForgotPassword;