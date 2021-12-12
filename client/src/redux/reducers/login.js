import { INIT_STATE } from '../../constant';
import { forgetAccount, getType, loginAccount, logOut, signUpAccount, signUpAccountTitle } from '../actions';

function toastReducers(state = INIT_STATE.login, action) {
    switch (action.type) {
        case getType(loginAccount): 
            return {
                key: 1,
                title: 'Đăng nhập tài khoản',
            }
        case getType(signUpAccount): 
            return {
                key: 2,
                title: 'Đăng ký tài khoản cho giáo viên',
            }
        case getType(signUpAccountTitle): 
            return {
                ...state,
                title: action.payload.title,
            }
        case getType(forgetAccount): 
            return {
                key: 3,
                title: 'Lấy lại tài khoản',
            }
        // LOGOUT
        case getType(logOut):
            return {
                key: 1,
                title: 'Đăng nhập tài khoản',
            }
        default: return state;
    }
}

export default toastReducers;