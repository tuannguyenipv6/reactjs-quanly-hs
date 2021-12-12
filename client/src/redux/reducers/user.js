import { INIT_STATE } from '../../constant';
import { getType, loginUser, forgoUser, newUser, setLoginAccount, logOut } from '../actions';

function userReducers(state = INIT_STATE.user, action) {
    switch (action.type) {
        // Login
        case getType(loginUser.loginUserRequest):
            return { 
                ...state,
                isLoading: true,
            }
        case getType(loginUser.loginUserSuccess):
            if (action.payload.key) {
                return {
                    ...state,
                    taiKhoan: action.payload.taiKhoan,
                    checkLogin: true,
                    isLoading: false,
                    mMSL: action.payload.pMSL,
                    mGV_PH: action.payload.pGVPH === 1 ? true : false,
                }
            } else {
                return state;
            }
        case getType(loginUser.loginUserFailure):
            return {
                ...state,
                isLoading: false,
            } 
        case getType(setLoginAccount): 
            return {
                checkLogin: false,
                isLoading: false,
                mMSL: undefined,
                mGV_PH: false,
                checkIsFogoPass: false,
                newUser: false,
            }

        // Quên MK
        case getType(forgoUser.forgoUserRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(forgoUser.forgoUserSuccess):
            if (action.payload.key) {
                return {
                    ...state,
                    checkIsFogoPass: true,
                    isLoading: false,
                }
            } else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(forgoUser.forgoUserFailure):
            return {
                ...state,
                isLoading: false,
            }

        // Tạo TK
        case getType(newUser.newUserRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(newUser.newUserSuccess):
            if (!action.payload.key) {
                return {
                    ...state,
                    isLoading: false,
                }
            } else if (action.payload.key && !action.payload.result) {
                return {
                    ...state,
                    isLoading: false,
                }
            }else if (action.payload.key && action.payload.result) {
                return {
                    ...state,
                    newUser: true,
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(newUser.newUserFailure):
            return {
                ...state,
                isLoading: false,
            }

        // LOGOUT
        case getType(logOut):
            return {
                checkLogin: false,
                taiKhoan: '',
                isLoading: false,
                mMSL: undefined,
                mGV_PH: false,
                checkIsFogoPass: false,
                newUser: false,
            }
        default: return state;
    }
}

export default userReducers;